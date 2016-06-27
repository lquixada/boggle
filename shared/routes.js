import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import About from './components/about';
import App from './components/app';

export default (
  <Route path="/" component={App}>
    <Route path="about" component={About} />
  </Route>
);
