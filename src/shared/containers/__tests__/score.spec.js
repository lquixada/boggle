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
    expect(component.find('tr').exists()).to.be.false;
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

    expect(component.find('tr').exists()).to.be.false;
  });
});
