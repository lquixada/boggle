import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducers';
import { immutifyState } from '../utils/helper';

const configureStore = (initialState = {}, devTools = f => f) => {
  const state = immutifyState(initialState);
  const middlewares = compose(applyMiddleware(thunkMiddleware), devTools);
  return createStore(reducers, state, middlewares);
};

export default configureStore;
