import './setup';
import mountConnected from './helper';
import React from 'react';
import { expect } from 'chai';
import { bindActionCreators } from 'redux'
import configureStore from '../store';
import * as actionCreators from '../actions';
import Button from '../components/button.js';

describe('<Button />', () => {
  let actions;
  let component;
  let store;

  beforeEach(() => {
    store = configureStore();
    component = mountConnected(<Button />, store);
    actions = bindActionCreators(actionCreators, store.dispatch);
  });

  it('shows "start" by default', () => {
    expect(component.find('button').text()).to.be.equal('start');
  });

  it('shows "stop" when the game has started', () => {
    actions.startGame();

    expect(component.find('button').text()).to.equal('stop');
  });

  it('shows "start" when the game has stopped', () => {
    actions.stopGame();

    expect(component.find('button').text()).to.equal('start');
  });

});
