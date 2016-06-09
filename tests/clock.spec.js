import './setup';
import mountConnected from './helper';
import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { bindActionCreators } from 'redux'
import configureStore from '../store';
import * as actionCreators from '../actions';
import Clock from '../components/clock.js';

describe('<Clock />', () => {
  let actions;
  let clock;
  let component;
  let store;

  beforeEach(() => {
    clock = sinon.useFakeTimers();
    store = configureStore();
    component = mountConnected(<Clock />, store);
    actions = bindActionCreators(actionCreators, store.dispatch);
  });

  afterEach(function () {
    clock.restore();
  });

  it('displays 60 by default', () => {
    expect(component.find('text').text()).to.equal('60');
  });

  it('decrements when the game starts', () => {
    actions.startGame();

    clock.tick(1010);
    expect(component.find('text').text()).to.equal('59');

    clock.tick(1010);
    expect(component.find('text').text()).to.equal('58');
  });

  it('shows dial running when the game starts', () => {
    actions.startGame();

    expect(component.find('.running').length).to.equal(1);
  });

  // TODO: timer is not resetting
  // it('displays 60 when the game stops', () => {
  //   actions.stopGame();
  //
  //   expect(component.find('text').text()).to.equal('60');
  // });

});
