import './setup';
import mountConnected from './helper';
import React from 'react';
import expect from 'expect';
import store from '../store';
import * as actions from '../actions';
import Button from '../components/button.js';

// TODO: create store on beforeEach
describe('<Button />', function () {
  let component;

  beforeEach(() => {
    component = mountConnected(<Button />);
  });

  it('shows "start" by default', function () {
    expect(component.find('button').text()).toEqual('start');
  });

  it('shows "stop" when the game has started', function () {
    store.dispatch(actions.startGame());

    expect(component.find('button').text()).toEqual('stop');
  });

  it('shows "start" when the game has stopped', function () {
    store.dispatch(actions.stopGame());

    expect(component.find('button').text()).toEqual('start');
  });

});
