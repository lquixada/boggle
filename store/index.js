import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'
import reducers from '../reducers';

const devTools = (window.devToolsExtension? window.devToolsExtension(): f => f);
const configureStore = () => {
  return createStore(reducers, {}, compose(applyMiddleware(thunkMiddleware), devTools));
};

export default configureStore;
