import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'
import reducers from '../reducers';

const configureStore = (initialState = {}, devTools = f => f) => {
  return createStore(reducers, initialState, compose(applyMiddleware(thunkMiddleware), devTools));
};

export default configureStore;
