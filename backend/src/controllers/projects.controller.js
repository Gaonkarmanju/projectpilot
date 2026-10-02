const prisma = require('../lib/prisma');
const HttpError = require('../lib/httpError');
const { generateRoadmap } = require('../services/roadmap.service');

// Loads a project and checks it belongs to the logged-in user
async function findOwnedProject(projectId, userId) {
  const project = await prisma.userProject.findUnique({
    where: { id: projectId },
    include: { idea: true, roadmap: true, milestones: { orderBy: [{ weekNo: 'asc' }, { title: 'asc' }] } },
  });
  if (!project || project.userId !== userId) throw new HttpError(404, 'Project not found.');
  return project;
}

const withProgress = (p) => {
  const total = p.milestones?.length || 0;
  const done = p.milestones?.filter((m) => m.isDone).length || 0;
  return { ...p, progress: { total, done, percent: total ? Math.round((done / total) * 100) : 0 } };
};

async function createProject(req, res) {
  const { ideaId, deadline } = req.valid.body;
  const idea = await prisma.idea.findUnique({ where: { id: ideaId } });
  if (!idea) throw new HttpError(404, 'Idea not found.');

  const existing = await prisma.userProject.findUnique({ where: { userId_ideaId: { userId: req.userId, ideaId } } });
  if (existing) throw new HttpError(409, 'You already saved this idea. Open it from your dashboard.');

  const project = await prisma.userProject.create({
    data: { userId: req.userId, ideaId, deadline: deadline ? new Date(deadline) : null },
    include: { idea: true },
  });
  res.status(201).json({ project });
}

async function listProjects(req, res) {
  const projects = await prisma.userProject.findMany({
    where: { userId: req.userId },
    include: { idea: true, milestones: { select: { isDone: true } } },
    orderBy: { startedAt: 'desc' },
  });
  res.json({ projects: projects.map(withProgress) });
}

async function getProject(req, res) {
  const project = await findOwnedProject(req.params.id, req.userId);
  res.json({ project: withProgress(project) });
}

async function updateProject(req, res) {
  await findOwnedProject(req.params.id, req.userId);
  const { status, deadline } = req.valid.body;
  const data = {};
  if (status) data.status = status;
  if (deadline !== undefined) data.deadline = deadline ? new Date(deadline) : null;
  await prisma.userProject.update({ where: { id: req.params.id }, data });
  const project = await findOwnedProject(req.params.id, req.userId);
  res.json({ project: withProgress(project) });
}

async function deleteProject(req, res) {
  await findOwnedProject(req.params.id, req.userId);
  await prisma.userProject.delete({ where: { id: req.params.id } });
  res.status(204).end();
}

// POST /api/projects/:id/roadmap -> generates (or regenerates) the plan and milestones
async function createRoadmap(req, res) {
  const project = await findOwnedProject(req.params.id, req.userId);
  const user = await prisma.user.findUnique({ where: { id: req.userId } });
  const { content, source } = await generateRoadmap({ idea: project.idea, deadline: project.deadline, user });

  const milestones = content.weeks.flatMap((w) =>
    (w.tasks || []).map((task) => ({ userProjectId: project.id, title: String(task).slice(0, 300), weekNo: Number(w.week) || 1 }))
  );

  await prisma.$transaction([
    prisma.roadmap.upsert({
      where: { userProjectId: project.id },
      create: { userProjectId: project.id, content, source },
      update: { content, source, generatedAt: new Date() },
    }),
    prisma.milestone.deleteMany({ where: { userProjectId: project.id } }),
    prisma.milestone.createMany({ data: milestones }),
    prisma.userProject.update({ where: { id: project.id }, data: { status: 'IN_PROGRESS' } }),
  ]);

  const updated = await findOwnedProject(project.id, req.userId);
  res.status(201).json({ project: withProgress(updated) });
}

async function toggleMilestone(req, res) {
  await findOwnedProject(req.params.id, req.userId);
  const milestone = await prisma.milestone.findUnique({ where: { id: req.params.milestoneId } });
  if (!milestone || milestone.userProjectId !== req.params.id) throw new HttpError(404, 'Milestone not found.');

  const { isDone } = req.valid.body;
  await prisma.milestone.update({
    where: { id: milestone.id },
    data: { isDone, doneAt: isDone ? new Date() : null },
  });

  // Auto-complete the project when every milestone is done
  const remaining = await prisma.milestone.count({ where: { userProjectId: req.params.id, isDone: false } });
  await prisma.userProject.update({
    where: { id: req.params.id },
    data: { status: remaining === 0 ? 'COMPLETED' : 'IN_PROGRESS' },
  });

  const project = await findOwnedProject(req.params.id, req.userId);
  res.json({ project: withProgress(project) });
}

module.exports = { createProject, listProjects, getProject, updateProject, deleteProject, createRoadmap, toggleMilestone };
