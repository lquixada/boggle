import { createStore } from 'redux';
import reducers from '../reducers';

const configureStore = () => {
  return createStore(reducers, {}, (window.devToolsExtension? window.devToolsExtension(): undefined));
}

export default configureStore;
