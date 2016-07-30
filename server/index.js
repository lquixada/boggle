require('babel-core/register');
require.extensions['.scss'] = function () {};

const express = require('express');
const React = require('react');

const { renderToString } = require('react-dom/server');
const { match, RouterContext } = require('react-router');
const { Provider } = require('react-redux');

const routes = require('../shared/routes').default;
const configureStore = require('../shared/store').default;

const PORT = process.env.PORT || 9000;
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
app.use((req, res) => {
  match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
    if (err) {
      console.error(err);
      return res.status(500).end('Internal server error');
    }

    if (!renderProps) {
      return res.status(404).end('Not found');
    }

    const store = configureStore();
    const routing = React.createElement(RouterContext, renderProps);
    const provider = React.createElement(Provider, {store: store}, routing);

    res.render('index', {
      data: JSON.stringify(store.getState()),
      html: renderToString(provider)
    });
  });
});

const server = app.listen(PORT, () => {
  console.info(`Server running on: http://localhost:${PORT}/`);
});

module.exports = server;
