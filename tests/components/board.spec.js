import React from 'react';
import { mountConnected } from '../helper';
import { bindActionCreators } from 'redux'
import configureStore from '../../shared/store';
import * as actionCreators from '../../shared/actions';
import Board from '../../shared/components/board';

describe('<Board />', () => {
  let actions;
  let component;
  let store;

  beforeEach(() => {
    store = configureStore();
    component = mountConnected(<Board />, store);
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
