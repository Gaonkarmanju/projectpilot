// eslint-disable-next-line no-unused-vars
function errorHandler(err, _req, res, _next) {
  if (err.code === 'P2002') {
    return res.status(409).json({ error: 'This record already exists.' });
  }
  if (err.code === 'P2025') {
    return res.status(404).json({ error: 'Not found.' });
  }
  const status = err.status || 500;
  if (status === 500) console.error(err);
  res.status(status).json({ error: status === 500 ? 'Something went wrong on the server.' : err.message });
}

function notFound(_req, res) {
  res.status(404).json({ error: 'Route not found.' });
}

module.exports = { errorHandler, notFound };
