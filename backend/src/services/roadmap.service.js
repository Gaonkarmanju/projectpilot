const { anthropicApiKey, anthropicModel } = require('../config/env');

/**
 * Roadmap shape (stored as JSON in roadmaps.content):
 * {
 *   summary: string,
 *   techStack: string[],
 *   modules: { name: string, description: string }[],
 *   weeks: { week: number, title: string, tasks: string[] }[]
 * }
 */

function weeksAvailable(idea, deadline) {
  if (!deadline) return idea.estWeeks;
  const ms = new Date(deadline).getTime() - Date.now();
  const weeks = Math.floor(ms / (7 * 24 * 60 * 60 * 1000));
  return Math.min(Math.max(weeks, 2), 16); // clamp to 2..16 weeks
}

// ---------- Free fallback: deterministic template ----------
function templateRoadmap(idea, totalWeeks) {
  const phases = [
    { title: 'Requirements and design', tasks: ['Write the problem statement and abstract', 'List functional and non-functional requirements (SRS)', 'Draw use case and ER diagrams', 'Set up the GitHub repo and README'] },
    { title: 'Project setup', tasks: [`Initialise the project with ${idea.techStack.slice(0, 2).join(' and ')}`, 'Set up the database and environment variables', 'Create the basic folder structure and first commit'] },
    ...idea.features.map((f) => ({ title: `Build: ${f}`, tasks: [`Design the data and screens for ${f.toLowerCase()}`, `Implement ${f.toLowerCase()}`, 'Test it manually and fix bugs', 'Commit with clear messages'] })),
    { title: 'Testing and polish', tasks: ['Write test cases and record results', 'Handle errors and empty states', 'Improve UI and responsiveness'] },
    { title: 'Deployment and documentation', tasks: ['Deploy the project and add the live link to README', 'Complete the project report', 'Prepare demo and viva answers'] },
  ];

  // Fit phases into the available weeks (merge if too many, stretch if too few)
  const weeks = [];
  for (let w = 1; w <= totalWeeks; w++) {
    const start = Math.floor(((w - 1) * phases.length) / totalWeeks);
    const end = Math.max(start + 1, Math.floor((w * phases.length) / totalWeeks));
    const slice = phases.slice(start, end);
    weeks.push({
      week: w,
      title: slice.map((p) => p.title).join(' + '),
      tasks: slice.flatMap((p) => p.tasks),
    });
  }

  return {
    summary: `${idea.title}: ${idea.description}`,
    techStack: idea.techStack,
    modules: idea.features.map((f) => ({ name: f, description: `Handles ${f.toLowerCase()} for the application.` })),
    weeks,
  };
}

// ---------- AI generation via Anthropic Messages API ----------
async function aiRoadmap(idea, totalWeeks, user) {
  const prompt = `You are a mentor helping a computer science college student plan their academic project.
Project: ${idea.title}
Description: ${idea.description}
Suggested tech stack: ${idea.techStack.join(', ')}
Core features: ${idea.features.join(', ')}
Student skill level: ${user?.skillLevel || 'BEGINNER'}
Weeks available: ${totalWeeks}

Create a practical week-by-week plan with exactly ${totalWeeks} weeks. Include documentation (abstract, SRS, UML diagrams, report) and testing, as colleges grade these. Guide the student to build it themselves; do not write code.

Respond with ONLY valid JSON, no markdown, in this shape:
{"summary": string, "techStack": string[], "modules": [{"name": string, "description": string}], "weeks": [{"week": number, "title": string, "tasks": string[]}]}`;

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': anthropicApiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: anthropicModel,
      max_tokens: 4000,
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  if (!res.ok) throw new Error(`AI request failed with status ${res.status}`);
  const data = await res.json();
  const text = data.content.filter((b) => b.type === 'text').map((b) => b.text).join('');
  const parsed = JSON.parse(text.replace(/```json|```/g, '').trim());

  if (!Array.isArray(parsed.weeks) || parsed.weeks.length === 0) {
    throw new Error('AI response did not include weeks');
  }
  return parsed;
}

async function generateRoadmap({ idea, deadline, user }) {
  const totalWeeks = weeksAvailable(idea, deadline);
  if (anthropicApiKey) {
    try {
      return { content: await aiRoadmap(idea, totalWeeks, user), source: 'ai' };
    } catch (err) {
      console.warn('AI roadmap failed, using template instead:', err.message);
    }
  }
  return { content: templateRoadmap(idea, totalWeeks), source: 'template' };
}

module.exports = { generateRoadmap, templateRoadmap, weeksAvailable };
