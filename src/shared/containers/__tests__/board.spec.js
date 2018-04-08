import React from 'react';
import {bindActionCreators} from 'redux';

import {mountConnected} from '../../../__tests__/helper';
import configureStore from '../../store';
import * as actionCreators from '../../actions';
import BoardContainer from '../board';

describe('<BoardContainer />', () => {
  let actions;
  let component;
  let store;

  beforeEach(() => {
    store = configureStore();
    component = mountConnected(<BoardContainer />, store);
    actions = bindActionCreators(actionCreators, store.dispatch);
  });

  it('is empty by default', () => {
    const text = component.find('table').text();
    expect(text.trim()).toHaveLength(0);
  });

  it('is filled when the game has started', () => {
    actions.startGame();
    const text = component.find('table').text();
    expect(text.trim()).toHaveLength(16);
  });

  it('is empty when the game has stopped', () => {
    actions.stopGame();
    const text = component.find('table').text();
    expect(text.trim()).toHaveLength(0);
  });
});
