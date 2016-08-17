import React from 'react';
import { mountConnected } from '../../helper';
import { bindActionCreators } from 'redux';
import configureStore from '../../../shared/store';
import * as actionCreators from '../../../shared/actions';
import Score from '../../../shared/components/score';

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
    expect(component.find('tr')).to.not.exist;
  });

  it('adds a valid attempt', () => {
    actions.addAttempt('someword', true);

    expect(component.find('td').at(0)).to.have.text('someword');
    expect(component.find('td').at(1)).to.have.text('8');
  });

  it('adds an invalid attempt', () => {
    actions.addAttempt('someword', false);

    expect(component.find('td').at(0)).to.have.text('someword');
    expect(component.find('td').at(1)).to.have.text('✘');
  });

  it('must be empty when the game stops', () => {
    actions.stopGame();

    expect(component.find('tr')).to.not.exist;
  });

});
