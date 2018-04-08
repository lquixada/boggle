import ravenMiddleware from 'redux-raven-middleware';
import {routerMiddleware} from 'react-router-redux';

import history from './history';
import configureStore from '../shared/store';

const state = window.__INITIAL_STATE__;
const devTools = (window.devToolsExtension ? window.devToolsExtension() : (f) => f);
const middlewares = [routerMiddleware(history)];

if (process.env.NODE_ENV === 'production') {
  middlewares.push(ravenMiddleware('https://f42a178848284bf4ab21149d98b3768b@sentry.io/104332'));
}

export default configureStore(state, middlewares, devTools);
