const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const prisma = require('../lib/prisma');
const HttpError = require('../lib/httpError');
const { jwtSecret, jwtExpiresIn } = require('../config/env');

const publicUser = ({ passwordHash, ...user }) => user;
const signToken = (userId) => jwt.sign({ sub: userId }, jwtSecret, { expiresIn: jwtExpiresIn });

async function register(req, res) {
  const { name, email, password, college, year, skillLevel } = req.valid.body;
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) throw new HttpError(409, 'An account with this email already exists. Log in instead.');

  const user = await prisma.user.create({
    data: { name, email, passwordHash: await bcrypt.hash(password, 10), college, year, skillLevel },
  });
  res.status(201).json({ token: signToken(user.id), user: publicUser(user) });
}

async function login(req, res) {
  const { email, password } = req.valid.body;
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    throw new HttpError(401, 'Email or password is incorrect.');
  }
  res.json({ token: signToken(user.id), user: publicUser(user) });
}

async function me(req, res) {
  const user = await prisma.user.findUnique({ where: { id: req.userId } });
  if (!user) throw new HttpError(404, 'Account not found.');
  res.json({ user: publicUser(user) });
}

module.exports = { register, login, me };
