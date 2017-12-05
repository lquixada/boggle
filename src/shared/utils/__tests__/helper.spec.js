import {List, Map} from 'immutable';
import {isOnScoreList} from '../helper';

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
});
