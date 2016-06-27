import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import configureStore from './shared/store';
import { immutifyState } from './shared/utils/helper';
import routes from './shared/routes';
import './shared/index.less';

const devTools = (window.devToolsExtension? window.devToolsExtension(): f => f);
const initialState = immutifyState(window.__INITIAL_STATE__);
const store = configureStore(initialState, devTools);

ReactDOM.render(<Provider store={store}>
  <Router children={routes} history={browserHistory} />
</Provider>, document.getElementById('game'));
