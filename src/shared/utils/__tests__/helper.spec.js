import nock from 'nock';
import {fromJS, List, Map} from 'immutable';

import {isOnBoard, isOnDictionary, isOnScoreList, immutifyState} from '../helper';

describe('Helpers', () => {
  let attempts;

  beforeEach(() => {
    attempts = fromJS([
      {word: 'word1'},
      {word: 'word2'}
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

  describe('isOnBoard', () => {
    let matrix;

    beforeEach(() => {
      matrix = fromJS([
        ['E', 'H', 'R', 'T'],
        ['B', 'I', 'T', 'E'],
        ['G', 'I', 'S', 'F'],
        ['A', 'M', 'N', 'O']
      ]);
    });

    it('checks if a word is on the board', () => {
      expect(isOnBoard(matrix, 'bite')).toBe(true);
    });

    it('checks if a word is not on the board', () => {
      expect(isOnBoard(matrix, 'word')).toBe(false);
    });
  });

  describe('isOnDictionary', () => {
    afterEach(() => {
      nock.cleanAll();
    });

    it('checks word has been attempted', () => {
      nock('https://en.wiktionary.org/').get(/w\/api.php/).reply(200, {
        'query': {
          'pages': {
            '45': {}
          }
        }
      });

      return isOnDictionary('word').then((result) => {
        expect(result).toBeTruthy();
      });
    });

    it('checks word has been attempted', () => {
      nock('https://en.wiktionary.org/').get(/w\/api.php/).reply(200, {
        'query': {
          'pages': {
            '-1': {}
          }
        }
      });

      return isOnDictionary('n0tAw0rD').then((result) => {
        expect(result).toBeFalsy();
      });
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
