const HttpError = require('../lib/httpError');

// Validates req[source] against a zod schema and stores the parsed value
const validate = (schema, source = 'body') => (req, _res, next) => {
  const result = schema.safeParse(req[source]);
  if (!result.success) {
    const first = result.error.issues[0];
    const field = first.path.join('.');
    return next(new HttpError(400, field ? `${field}: ${first.message}` : first.message));
  }
  req.valid = { ...(req.valid || {}), [source]: result.data };
  next();
};

module.exports = validate;
