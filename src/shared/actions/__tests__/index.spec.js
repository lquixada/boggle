import {Map} from 'immutable';
import {bindActionCreators} from 'redux';

import configureStore from '../../store';
import * as actionCreators from '../../actions';
import * as helper from '../../utils/helper';
import {startGame, stopGame} from '../';

describe('actions', () => {
  describe('startGame', () => {
    it('returns an action to start the game', () => {
      expect(startGame()).toEqual({
        type: 'START_GAME',
      });
    });
  });

  describe('stopGame', () => {
    it('returns an action to stop the game', () => {
      expect(stopGame()).toEqual({
        type: 'STOP_GAME',
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
      helper.isOnDictionary = jest.fn().mockReturnValue(true);
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
        .then(() => helper.isOnDictionary.mockReturnValue(false))
        .then(() => actions.addCheckedAttempt('smv'))
        .then(() => {
          const {attempts} = store.getState();
          expect(attempts.includes(Map({word: 'SMV', score: '✘'}))).toBe(true);
        });

      return promise;
    });
  });
});
