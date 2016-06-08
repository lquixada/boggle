import { createStore } from 'redux';
import reducers from '../reducers';

const configureStore = () => {
  // Establish the root object, `window` (`self`) in the browser, or `global` on the server.
  // We use `self` instead of `window` for `WebWorker` support.
  var root = (typeof self == 'object' && self.self === self && self) ||
      (typeof global == 'object' && global.global === global && global);
      
  const store = createStore(reducers, {}, (root.devToolsExtension? root.devToolsExtension(): undefined));

  return store;
}


export default configureStore;
