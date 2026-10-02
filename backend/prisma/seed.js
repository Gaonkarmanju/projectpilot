// Seeds the ideas table from prisma/ideas/*.js. Run: npm run db:seed
// Safe to re-run: only ideas with new titles are inserted. Existing ideas
// (and the student projects linked to them) are never deleted.
const { PrismaClient } = require('@prisma/client');
const loadIdeas = require('./ideas');

const prisma = new PrismaClient();

async function main() {
  const ideas = loadIdeas();
  const { count } = await prisma.idea.createMany({ data: ideas, skipDuplicates: true });
  const total = await prisma.idea.count();
  console.log(`Loaded ${ideas.length} ideas from files, inserted ${count} new. ${total} ideas in the database.`);
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
