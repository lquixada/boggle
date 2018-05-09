import {Game, About} from './components';

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
