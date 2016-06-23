import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'
import reducers from '../reducers';

const devTools = (window.devToolsExtension? window.devToolsExtension(): f => f);
const configureStore = (initialState = {}) => {
  return createStore(reducers, initialState, compose(applyMiddleware(thunkMiddleware), devTools));
};

export default configureStore;
