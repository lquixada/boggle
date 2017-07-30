import 'es6-promise';
import React from 'react';
import ReactDOM from 'react-dom';
import RavenMiddleware from 'redux-raven-middleware';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {matchRoutes, renderRoutes} from 'react-router-config';
import {ConnectedRouter, routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import configureStore from '../shared/store';
import routes from '../shared/routes';

const history = createHistory();
const middlewares = [routerMiddleware(history)];

if (process.env.NODE_ENV === 'production') {
  middlewares.push(RavenMiddleware('https://f42a178848284bf4ab21149d98b3768b@sentry.io/104332'));
}

const devTools = (window.devToolsExtension ? window.devToolsExtension() : f => f);
const store = configureStore(window.__INITIAL_STATE__, middlewares, devTools);

ReactDOM.render(<Provider store={store}>
  <ConnectedRouter history={history} children={renderRoutes(routes)} />
</Provider>, document.getElementById('game'));

if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/service-worker.js');
}
