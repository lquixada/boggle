/* eslint-disable consistent-return */
import React from 'react';
import {renderToString} from 'react-dom/server';
import {matchRoutes, renderRoutes} from 'react-router-config';
import {StaticRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import assets from '../../public/assets.json';
import template from '../template';
import routes from '../../shared/routes';
import configureStore from '../../shared/store';

export default (req, res) => {
  const match = matchRoutes(routes, req.url);

  if (match.length === 0) {
    return res.status(404).end('Not found');
  }

  const store = configureStore();
  const state = JSON.stringify(store.getState());
  const content = renderToString(<Provider store={store}>
    <StaticRouter location={req.url} context={{}}>
      {renderRoutes(routes)}
    </StaticRouter>
  </Provider>);

  res.send(template({state, content, assets}));
};
