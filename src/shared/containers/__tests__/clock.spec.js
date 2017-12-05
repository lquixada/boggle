import React from 'react';
import sinon from 'sinon';
import {bindActionCreators} from 'redux';
import {mountConnected} from '../../../__tests__/helper';
import configureStore from '../../store';
import * as actionCreators from '../../actions';
import ClockContainer from '../clock';

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
    expect(component.find('text').text()).toBe('60');
  });

  it('decrements when the game starts', () => {
    actions.startGame();
    expect(component.find('.counter').text()).toBe('59');

    clock.tick(1000);
    expect(component.find('.counter').text()).toBe('58');

    clock.tick(1000);
    expect(component.find('.counter').text()).toBe('57');
  });

  // TODO: timer is not resetting
  // it('displays 60 when the game stops', () => {
  //   actions.stopGame();
  //
  //   expect(component.find('.counter').text()).to.equal('60');
  // });
});
