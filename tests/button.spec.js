import './setup';
import mountConnected from './helper';
import React from 'react';
import expect from 'expect';
import { bindActionCreators } from 'redux'
import configureStore from '../store';
import * as actionCreators from '../actions';
import Button from '../components/button.js';

describe('<Button />', function () {
  let actions;
  let component;
  let store;

  beforeEach(() => {
    store = configureStore();
    component = mountConnected(<Button />, store);
    actions = bindActionCreators(actionCreators, store.dispatch);
  });

  it('shows "start" by default', function () {
    expect(component.find('button').text()).toEqual('start');
  });

  it('shows "stop" when the game has started', function () {
    actions.startGame();

    expect(component.find('button').text()).toEqual('stop');
  });

  it('shows "start" when the game has stopped', function () {
    actions.stopGame();

    expect(component.find('button').text()).toEqual('start');
  });

});
