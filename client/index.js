import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import configureStore from '../shared/store';
import routes from '../shared/routes';
import assets from '../webpack-assets';

const devTools = (window.devToolsExtension? window.devToolsExtension(): f => f);
const store = configureStore(window.__INITIAL_STATE__, devTools);

ReactDOM.render(<Provider store={store}>
  <Router children={routes} history={browserHistory} />
</Provider>, document.getElementById('game'));

if (navigator.serviceWorker) {
  navigator.serviceWorker.register(assets.serviceWorker.js);
}
