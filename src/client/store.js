import ravenMiddleware from 'redux-raven-middleware';
import {routerMiddleware} from 'react-router-redux';

import history from './history';
import configureStore from '../shared/store';
import config from '../config';

const state = window.__INITIAL_STATE__;
const devTools = (window.devToolsExtension ? window.devToolsExtension() : (f) => f);
const middlewares = [routerMiddleware(history)];

if (process.env.NODE_ENV === 'production') {
  middlewares.push(ravenMiddleware(config.url.sentry));
}

export default configureStore(state, middlewares, devTools);
