import mountConnected from '../helper';
import React from 'react';
import { bindActionCreators } from 'redux'
import configureStore from '../../shared/store';
import * as actionCreators from '../../shared/actions';
import Score from '../../shared/components/score.js';

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
    expect(component.find('tr')).to.have.lengthOf(0);
  });

  it('adds a valid attempt', () => {
    actions.addAttempt('someword', true);

    expect(component.find('td').at(0).text()).to.equal('someword');
    expect(component.find('td').at(1).text()).to.equal('8');
  });

  it('adds an invalid attempt', () => {
    actions.addAttempt('someword', false);

    expect(component.find('td').at(0).text()).to.equal('someword');
    expect(component.find('td').at(1).text()).to.equal('✘');
  });

  it('must be empty when the game stops', () => {
    actions.stopGame();

    expect(component.find('tr')).to.have.lengthOf(0);
  });

});
