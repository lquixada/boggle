import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import App from './components/app';
import css from './index.less';

const store = createStore(reducers, {}, (window.devToolsExtension? window.devToolsExtension(): undefined));

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('game'));
