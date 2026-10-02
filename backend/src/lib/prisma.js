const { PrismaClient } = require('@prisma/client');

// Single shared client for the whole app
const prisma = new PrismaClient();

module.exports = prisma;
