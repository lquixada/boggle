import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Game from './components/game';
import store from './store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Game />
      </Provider>
    );
  }
}
