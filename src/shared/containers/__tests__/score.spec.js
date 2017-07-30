import React from 'react';
import {bindActionCreators} from 'redux';
import {mountConnected} from '../../../__tests__/helper';
import configureStore from '../../store';
import * as actionCreators from '../../actions';
import ScoreContainer from '../score';

describe('<ScoreContainer />', () => {
  let actions;
  let component;
  let store;

  beforeEach(() => {
    store = configureStore();
    component = mountConnected(<ScoreContainer />, store);
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
