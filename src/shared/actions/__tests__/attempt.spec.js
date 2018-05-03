import {Map} from 'immutable';
import {bindActionCreators} from 'redux';
import {isFSA} from 'flux-standard-action';

import configureStore from '../../store';
import * as actionCreators from '../../actions';
import * as helpers from '../../helpers/word';

describe('addAttempt', () => {
  it('is FSA-compliant', () => {
    expect(isFSA(actionCreators.addAttempt('bite', 4))).toBe(true);
  });

  it('returns an action to add an attempt', () => {
    expect(actionCreators.addAttempt('bite', 4)).toEqual({
      type: 'ADD_ATTEMPT',
      payload: {
        word: 'bite',
        scored: 4
      }
    });
  });
});

describe('addCheckedAttempt', () => {
  let actions;
  let store;

  beforeEach(() => {
    const attempts = [
      {word: 'HEY', score: 3},
    ];

    const matrix = [
      ['O', 'H', 'E', 'Y'],
      ['E', 'E', 'O', 'S'],
      ['N', 'O', 'R', 'M'],
      ['A', 'I', 'X', 'V'],
    ];

    store = configureStore({attempts, matrix});
    actions = bindActionCreators(actionCreators, store.dispatch);
    helpers.isOnDictionary = jest.fn().mockReturnValue(true);
  });

  it('validates correct word', () => {
    const promise = actions.addCheckedAttempt('norm').then(() => {
      const {attempts} = store.getState();
      expect(attempts.includes(Map({word: 'NORM', score: 4}))).toBe(true);
    });

    return promise;
  });

  it('invalidates word which is not on Board', () => {
    const promise = actions.addCheckedAttempt('fake').then(() => {
      const {attempts} = store.getState();
      expect(attempts.includes(Map({word: 'FAKE', score: '✘'}))).toBe(true);
    });

    return promise;
  });

  it('invalidates word which is already on ScoreList', () => {
    const promise = actions.addCheckedAttempt('hey').then(() => {
      const {attempts} = store.getState();
      expect(attempts.includes(Map({word: 'HEY', score: '✘'}))).toBe(true);
    });

    return promise;
  });

  it('invalidates word not on Dictionary', () => {
    const promise = actions.addCheckedAttempt('hey')
      .then(() => helpers.isOnDictionary.mockReturnValue(false))
      .then(() => actions.addCheckedAttempt('smv'))
      .then(() => {
        const {attempts} = store.getState();
        expect(attempts.includes(Map({word: 'SMV', score: '✘'}))).toBe(true);
      });

    return promise;
  });
});
