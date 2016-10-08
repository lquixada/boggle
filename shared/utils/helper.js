import {fromJS} from 'immutable';
import BoardChecker from '../utils/board-checker';
import Dictionary from '../utils/dictionary';

export const isOnScoreList = (attempts, word) => {
  const found = attempts.find((attempt) => {
    return attempt.get('word') === word;
  });

  return Boolean(found);
};

export const isOnBoard = (matrix, word) => {
  const board = new BoardChecker(matrix);
  return board.hasWord(word);
};

export const isOnDictionary = (word) => {
  const dictionary = new Dictionary();
  return dictionary.check(word);
};

// Abstraction to handle pre-composed state received from server
// (ie, leave top level keys untouched)
export const immutifyState = (obj) => {
  const objMut = {};

  fromJS(obj).forEach((v, k) => objMut[k] = v);

  return objMut;
};
