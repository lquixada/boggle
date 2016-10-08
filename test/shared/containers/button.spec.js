import React from 'react';
import { mountConnected } from '../../helper';
import { bindActionCreators } from 'redux';
import configureStore from '../../../shared/store';
import * as actionCreators from '../../../shared/actions';
import ButtonContainer from '../../../shared/containers/button';

describe('<ButtonContainer />', () => {
  let actions;
  let component;
  let store;

  beforeEach(() => {
    store = configureStore();
    component = mountConnected(<ButtonContainer />, store);
    actions = bindActionCreators(actionCreators, store.dispatch);
  });

  it('shows "start" by default', () => {
    expect(component.find('button')).to.have.text('start');
  });

  it('shows "stop" when the game has started', () => {
    actions.startGame();

    expect(component.find('button')).have.text('stop');
  });

  it('shows "start" when the game has stopped', () => {
    actions.stopGame();

    expect(component.find('button')).to.have.text('start');
  });

});
