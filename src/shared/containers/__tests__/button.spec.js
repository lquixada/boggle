import React from 'react';
import {bindActionCreators} from 'redux';
import {mountConnected} from '../../../__tests__/helper';
import configureStore from '../../store';
import * as actionCreators from '../../actions';
import ButtonContainer from '../button';

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
    expect(component.find('button').text()).to.equal('start');
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
