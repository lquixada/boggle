import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import configureStore from './store';
import About from './components/about';
import App from './components/app';
import './index.less';

const store = configureStore();

ReactDOM.render(<Provider store={store}>
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
  </Router>
</Provider>, document.getElementById('game'));
