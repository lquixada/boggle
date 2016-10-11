import React from 'react';
import {bindActionCreators} from 'redux';
import {mountConnected} from '../../helper';
import configureStore from '../../../shared/store';
import * as actionCreators from '../../../shared/actions';
import BoardContainer from '../../../shared/containers/board';

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
    expect(text.trim()).to.be.empty;
  });

  it('is filled when the game has started', () => {
    actions.startGame();
    const text = component.find('table').text();
    expect(text.trim()).to.not.be.empty;
    expect(text.trim()).to.have.lengthOf(16);
  });

  it('is empty when the game has stopped', () => {
    actions.stopGame();
    const text = component.find('table').text();
    expect(text.trim()).to.be.empty;
  });
});
