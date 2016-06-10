import { createStore } from 'redux';
import reducers from '../reducers';

const configureStore = () => {
  return createStore(reducers, {}, (root.devToolsExtension? root.devToolsExtension(): undefined));
}

export default configureStore;
