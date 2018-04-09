import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducers from '../reducers';
import {immutifyState} from '../helpers';

const configureStore = (initialState = {}, middlewares = [], devTools = (f) => f) => {
  initialState = immutifyState(initialState);
  middlewares = middlewares.concat([thunkMiddleware]);
  middlewares = compose(applyMiddleware(...middlewares), devTools);
  return createStore(reducers, initialState, middlewares);
};

export default configureStore;
