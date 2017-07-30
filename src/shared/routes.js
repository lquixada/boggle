import React from 'react';
import About from './components/about';
import Game from './components/game';

export default [
  {
    path: '/',
    exact: true,
    component: Game
  },
  {
    path: '/about',
    component: About
  }
];
