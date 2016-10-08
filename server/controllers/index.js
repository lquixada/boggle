import React from 'react';

import {renderToString} from 'react-dom/server';
import {match, RouterContext} from 'react-router';
import {Provider} from 'react-redux';

import assets from '../../public/assets';
import template from '../template';
import routes from '../../shared/routes';
import configureStore from '../../shared/store';

export default (req, res) => {
  match({routes, location: req.url}, (err, redirectLocation, renderProps) => {
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

    res.send(template({
      state: JSON.stringify(store.getState()),
      content: renderToString(provider),
      assets
    }));
  });
};
