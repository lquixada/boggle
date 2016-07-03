require('babel-core/register')({});

const express = require('express');
const path = require('path');
const React = require('react');

const { renderToString } = require('react-dom/server');
const { match, RouterContext } = require('react-router');
const { Provider } = require('react-redux');

const routes = require('./shared/routes').default;
const configureStore = require('./shared/store').default;

const PORT = process.env.PORT || 9000;
const app = express();

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const config = require('./webpack.dev.config');
  const compiler = webpack(config);

  app.use(require('webpack-dev-middleware')(compiler, {
    inline: true,
    hot: true,
    port: 8000,
    historyApiFallback: true,
    host: '0.0.0.0',
    publicPath: '/assets/scripts/'
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}

app.set('view engine', 'hbs');
app.set('views', './shared');
app.use(express.static(__dirname));
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
    const html = renderToString(provider);

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
