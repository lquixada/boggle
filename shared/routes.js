import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';
import About from './components/about';
import App from './components/app';
import Game from './components/game';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Game} />
    <Route path="about" component={About} />
  </Route>
);
