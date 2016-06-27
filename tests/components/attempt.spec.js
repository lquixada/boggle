import mountConnected from '../helper';
import React from 'react';
import { bindActionCreators } from 'redux'
import configureStore from '../../shared/store';
import * as actionCreators from '../../shared/actions';
import Attempt from '../../shared/components/attempt.js';

describe('<Attempt />', () => {
  let actions;
  let component;
  let store;

  beforeEach(() => {
    store = configureStore();
    component = mountConnected(<Attempt />, store);
    actions = bindActionCreators(actionCreators, store.dispatch);
  });

  it('is disabled by default', () => {
    expect(component.find('input[disabled]')).to.have.lengthOf(1);
  });

  it('is enabled when the game has started', () => {
    actions.startGame();

    expect(component.find('input').props().disabled).to.be.equal(false);
  });

  it('is disabled when the game has stopped', () => {
    actions.stopGame();

    expect(component.find('input').props().disabled).to.be.equal(true);
  });

});
