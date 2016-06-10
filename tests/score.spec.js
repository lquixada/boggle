import mountConnected from './helper';
import React from 'react';
import { bindActionCreators } from 'redux'
import configureStore from '../store';
import * as actionCreators from '../actions';
import Score from '../components/score.js';

describe('<Score />', () => {
  let actions;
  let component;
  let store;

  beforeEach(() => {
    store = configureStore();
    component = mountConnected(<Score />, store);
    actions = bindActionCreators(actionCreators, store.dispatch);
  });

  it('is empty by default', () => {
    expect(component.find('tr').length).to.equal(0);
  });

  it('adds a valid attempt', () => {
    actions.addAttempt('someword', true);

    expect(component.find('tr').text()).to.equal('someword8');
  });

  it('adds an invalid attempt', () => {
    actions.addAttempt('someword', false);

    expect(component.find('tr').text()).to.equal('someword✘');
  });

  it('must be empty when the game stops', () => {
    actions.stopGame();

    expect(component.find('tr').length).to.equal(0);
  });

});
