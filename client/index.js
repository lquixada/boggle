import React from 'react';
import ReactDOM from 'react-dom';
import RavenMiddleware from 'redux-raven-middleware';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import configureStore from '../shared/store';
import routes from '../shared/routes';

const middlewares = [];

if (process.env.NODE_ENV === 'production') {
  middlewares.push(RavenMiddleware('https://f42a178848284bf4ab21149d98b3768b@sentry.io/104332'));
}

const devTools = (window.devToolsExtension? window.devToolsExtension(): f => f);
const store = configureStore(window.__INITIAL_STATE__, middlewares, devTools);

ReactDOM.render(<Provider store={store}>
  <Router children={routes} history={browserHistory} />
</Provider>, document.getElementById('game'));

if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/service-worker.js');
}
