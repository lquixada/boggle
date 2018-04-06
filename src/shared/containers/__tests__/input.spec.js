import React from 'react';
import {bindActionCreators} from 'redux';
import {mountConnected} from '../../../__tests__/helper';
import configureStore from '../../store';
import * as actionCreators from '../../actions';
import InputContainer from '../input';

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
    expect(component.find('input').prop('disabled')).toBe(true);
  });

  it('is enabled when the game has started', () => {
    actions.startGame();
    expect(component.update().find('input').prop('disabled')).toBe(false);
  });

  it('is disabled when the game has stopped', () => {
    actions.stopGame();
    expect(component.update().find('input').prop('disabled')).toBe(true);
  });
});
