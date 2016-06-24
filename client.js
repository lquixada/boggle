import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import configureStore from './src/store';
import routes from './src/routes';
import './src/index.less';

const devTools = (window.devToolsExtension? window.devToolsExtension(): f => f);
const store = configureStore(window.__INITIAL_STATE__, devTools);

ReactDOM.render(<Provider store={store}>
  <Router children={routes} history={browserHistory} />
</Provider>, document.getElementById('game'));
