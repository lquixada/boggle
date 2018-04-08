import {List, Map} from 'immutable';

import {isOnScoreList, immutifyState} from '../helper';

describe('Helpers', () => {
  let attempts;

  beforeEach(() => {
    attempts = List([
      Map({word: 'word1'}),
      Map({word: 'word2'})
    ]);
  });

  describe('isOnScoreList', () => {
    it('checks word has been attempted', () => {
      expect(isOnScoreList(attempts, 'word1')).toBeTruthy();
    });

    it('checks word has not been attempted', () => {
      expect(isOnScoreList(attempts, 'word3')).toBeFalsy();
    });
  });

  describe('immutifyState', () => {
    let state;

    beforeEach(() =>{
      state = immutifyState({
        a: {},
        b: []
      });
    });

    it('maintain root object as pure object', () => {
      expect(state).toEqual(expect.any(Object));
    });

    it('convert object property into Map', () => {
      expect(Map.isMap(state.a)).toBeTruthy();
    });

    it('convert array property into List', () => {
      expect(List.isList(state.b)).toBeTruthy();
    });
  });
});
