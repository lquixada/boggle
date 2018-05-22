import ravenMiddleware from 'redux-raven-middleware';

import configureStore from '../shared/store';
import config from '../shared/config';

const state = window.__INITIAL_STATE__;
const middlewares = [];
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

if (process.env.NODE_ENV === 'production') {
  middlewares.push(ravenMiddleware(config.url.sentry));
}

export default configureStore(state, middlewares, devTools);
