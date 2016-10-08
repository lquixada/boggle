import React from 'react';
import {mountConnected} from '../../helper';
import {bindActionCreators} from 'redux';
import configureStore from '../../../shared/store';
import * as actionCreators from '../../../shared/actions';
import InputContainer from '../../../shared/containers/input';

describe('<InputContainer />', () => {
  let actions;
  let component;
  let store;

  beforeEach(() => {
    store = configureStore();
    component = mountConnected(<InputContainer />, store);
    actions = bindActionCreators(actionCreators, store.dispatch);
  });

  it('is disabled by default', () => {
    expect(component.find('input')).to.be.disabled();
  });

  it('is enabled when the game has started', () => {
    actions.startGame();

    expect(component.find('input')).to.not.be.disabled();
  });

  it('is disabled when the game has stopped', () => {
    actions.stopGame();

    expect(component.find('input')).to.be.disabled();
  });

});
