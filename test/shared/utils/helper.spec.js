import {List, Map} from 'immutable';
import {isOnScoreList} from '../../../shared/utils/helper';

describe('Helpers', () => {
  let attempts;

  before(() => {
    attempts = List([
      Map({word: 'word1'}),
      Map({word: 'word2'})
    ]);
  });

  describe('isOnScoreList', () => {
    it('checks word has been attempted', () => {
      expect(isOnScoreList(attempts, 'word1')).to.be.ok;
    });

    it('checks word has not been attempted', () => {
      expect(isOnScoreList(attempts, 'word3')).to.be.not.ok;
    });
  });
});
