// Loads every project idea from the domain files in this folder.
//
// Each domain file exports { domain, ideas } where `ideas` is a template string
// with one idea per line in this format:
//
//   Title | B/I/A | weeks | Description | Tech, Tech, Tech | Feature; Feature; Feature
//
// B/I/A = Beginner / Intermediate / Advanced. Blank lines and lines starting
// with # are ignored. Titles must be unique across all files.
const fs = require('fs');
const path = require('path');

const LEVELS = { B: 'BEGINNER', I: 'INTERMEDIATE', A: 'ADVANCED' };

function parseLine(line, domain, file, lineNo) {
  const where = `${file}:${lineNo}`;
  const parts = line.split('|').map((p) => p.trim());
  if (parts.length !== 6) throw new Error(`${where}: expected 6 "|"-separated fields, got ${parts.length}`);
  const [title, level, weeks, description, tech, features] = parts;
  const estWeeks = Number(weeks);
  if (!title) throw new Error(`${where}: missing title`);
  if (!LEVELS[level]) throw new Error(`${where}: difficulty must be B, I or A`);
  if (!Number.isInteger(estWeeks) || estWeeks < 2 || estWeeks > 16) throw new Error(`${where}: weeks must be 2-16`);
  if (description.length < 20) throw new Error(`${where}: description too short`);
  const techStack = tech.split(',').map((t) => t.trim()).filter(Boolean);
  const featureList = features.split(';').map((f) => f.trim()).filter(Boolean);
  if (techStack.length < 1) throw new Error(`${where}: needs at least one technology`);
  if (featureList.length < 3) throw new Error(`${where}: needs at least three features`);
  return { title, domain, difficulty: LEVELS[level], estWeeks, description, techStack, features: featureList };
}

function loadIdeas() {
  const files = fs.readdirSync(__dirname).filter((f) => f.endsWith('.js') && f !== 'index.js').sort();
  const ideas = [];
  const seen = new Map();
  for (const file of files) {
    const { domain, ideas: text } = require(path.join(__dirname, file));
    text.split('\n').forEach((raw, i) => {
      const line = raw.trim();
      if (!line || line.startsWith('#')) return;
      const idea = parseLine(line, domain, file, i + 1);
      const key = idea.title.toLowerCase();
      if (seen.has(key)) throw new Error(`${file}:${i + 1}: duplicate title "${idea.title}" (also in ${seen.get(key)})`);
      seen.set(key, file);
      ideas.push(idea);
    });
  }
  return ideas;
}

module.exports = loadIdeas;
