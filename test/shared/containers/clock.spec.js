import React from 'react';
import sinon from 'sinon';
import {bindActionCreators} from 'redux';
import {mountConnected} from '../../helper';
import configureStore from '../../../shared/store';
import * as actionCreators from '../../../shared/actions';
import ClockContainer from '../../../shared/containers/clock';

describe('<ClockContainer />', () => {
  let actions;
  let clock;
  let component;
  let store;

  beforeEach(() => {
    clock = sinon.useFakeTimers();
    store = configureStore();
    component = mountConnected(<ClockContainer />, store);
    actions = bindActionCreators(actionCreators, store.dispatch);
  });

  afterEach(() => {
    clock.restore();
  });

  it('displays 60 by default', () => {
    expect(component.find('text')).to.have.text('60');
  });

  it('decrements when the game starts', () => {
    actions.startGame();
    expect(component.find('.counter')).to.have.text('59');

    clock.tick(1000);
    expect(component.find('.counter')).to.have.text('58');

    clock.tick(1000);
    expect(component.find('.counter')).to.have.text('57');
  });

  // TODO: timer is not resetting
  // it('displays 60 when the game stops', () => {
  //   actions.stopGame();
  //
  //   expect(component.find('.counter')).to.have.text('60');
  // });
});
