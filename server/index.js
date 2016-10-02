require('babel-core/register');
require.extensions['.scss'] = function () {};

const PORT = process.env.PORT || 9000;
const express = require('express');
const app = express();

/* Middlewares */
if (process.env.NODE_ENV === 'development') {
  const webpackMiddlewares = require('./middlewares/webpack').default;
  app.use(...webpackMiddlewares);
}
app.use(require('./middlewares/logger').default);
app.use(require('./middlewares/static').default);

/* Controllers */
app.use(require('./controllers/index').default);

const server = app.listen(PORT, () => {
  console.info(`Server running on: http://localhost:${PORT}/`);
});

module.exports = server;
