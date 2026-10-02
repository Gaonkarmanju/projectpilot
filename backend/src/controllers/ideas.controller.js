const prisma = require('../lib/prisma');
const HttpError = require('../lib/httpError');

// GET /api/ideas?domain=Web&difficulty=BEGINNER&maxWeeks=8&q=chat&page=1&pageSize=24
async function listIdeas(req, res) {
  const { domain, difficulty, maxWeeks, q, page, pageSize } = req.valid.query;
  const where = {};
  if (domain) where.domain = domain;
  if (difficulty) where.difficulty = difficulty;
  if (maxWeeks) where.estWeeks = { lte: maxWeeks };
  if (q) {
    where.OR = [
      { title: { contains: q, mode: 'insensitive' } },
      { description: { contains: q, mode: 'insensitive' } },
      { techStack: { has: q } },
    ];
  }
  const [ideas, total] = await prisma.$transaction([
    prisma.idea.findMany({
      where,
      orderBy: [{ difficulty: 'asc' }, { title: 'asc' }],
      skip: (page - 1) * pageSize,
      take: pageSize,
    }),
    prisma.idea.count({ where }),
  ]);
  res.json({ ideas, total, page, pageSize });
}

// GET /api/ideas/filters -> distinct domains for the filter dropdown
async function getFilters(_req, res) {
  const rows = await prisma.idea.findMany({ distinct: ['domain'], select: { domain: true }, orderBy: { domain: 'asc' } });
  res.json({ domains: rows.map((r) => r.domain), difficulties: ['BEGINNER', 'INTERMEDIATE', 'ADVANCED'] });
}

async function getIdea(req, res) {
  const idea = await prisma.idea.findUnique({ where: { id: req.params.id } });
  if (!idea) throw new HttpError(404, 'Idea not found.');
  res.json({ idea });
}

module.exports = { listIdeas, getFilters, getIdea };
