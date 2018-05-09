import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Game} from '../shared/components';
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
