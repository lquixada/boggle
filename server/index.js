require('babel-core/register');
require.extensions['.scss'] = function () {};

const PORT = process.env.PORT || 9000;
const express = require('express');
const app = express();

/* Setup */
app.set('view engine', 'hbs');
app.set('views', './server/views');

/* Middlewares */
if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const config = require('../webpack.dev.config');
  const compiler = webpack(config);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}
app.use(require('./middlewares/logger').default);
app.use(require('./middlewares/static').default);

/* Controllers */
app.use(require('./controllers/index').default);

const server = app.listen(PORT, () => {
  console.info(`Server running on: http://localhost:${PORT}/`);
});

module.exports = server;
