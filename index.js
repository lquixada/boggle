import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import App from './components/app';
import './index.less';

const store = configureStore();

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('game'));
