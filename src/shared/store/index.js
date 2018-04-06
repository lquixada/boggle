import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducers';
import {immutifyState} from '../utils/helper';

const configureStore = (initialState = {}, middlewares = [], devTools = f => f) => {
  initialState = immutifyState(initialState);
  middlewares = middlewares.concat([thunkMiddleware]);
  middlewares = compose(applyMiddleware(...middlewares), devTools);
  const store = createStore(reducers, initialState, middlewares);

  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('../reducers', () => {
  //     store.replaceReducer(require('../reducers').default);
  //   });
  // }

  return store;
};

export default configureStore;
