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
  const config = require('./webpack.dev.config.js');
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

app.use(express.static(__dirname, {
  // Ignore the static index.html and generate a dynamic one
  index: false
}));

app.use((req, res) => {
  const store = configureStore();

  match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
    if (err) {
      console.error(err);
      return res.status(500).end('Internal server error');
    }

    if (!renderProps) {
      return res.status(404).end('Not found');
    }

    const routing = React.createElement(RouterContext, renderProps);
    const provider = React.createElement(Provider, {store: store}, routing);
    const html = renderToString(provider);

    res.end(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Boggle</title>

          <link href="/assets/sheets/bundle.css" rel="stylesheet" />

          <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(store.getState())};
          </script>
        </head>
        <body>
          <div id="game">${html}</div>
          <script src="/assets/scripts/bundle.js"></script>

          <a class="ribbon" href="https://github.com/lquixada/boggle">
            <img style="position: absolute; top: 0; right: 0; border: 0;" alt="Fork me on GitHub"
            src="https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67"
            data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png" />
          </a>
        </body>
      </html>
    `);
  });
});

const server = app.listen(PORT, function () {
  console.log(`Server running on: http://localhost:${PORT}/`);
});

module.exports = server;
