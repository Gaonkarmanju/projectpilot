const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/env');
const HttpError = require('../lib/httpError');

// Reads "Authorization: Bearer <token>" and attaches req.userId
function requireAuth(req, _res, next) {
  const header = req.headers.authorization || '';
  const [scheme, token] = header.split(' ');
  if (scheme !== 'Bearer' || !token) {
    return next(new HttpError(401, 'Log in to continue.'));
  }
  try {
    const payload = jwt.verify(token, jwtSecret);
    req.userId = payload.sub;
    next();
  } catch {
    next(new HttpError(401, 'Your session has expired. Log in again.'));
  }
}

module.exports = { requireAuth };
