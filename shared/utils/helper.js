import _ from 'underscore';
import { fromJS } from 'immutable';
import BoardChecker from '../utils/board-checker';
import Dictionary from '../utils/dictionary';

export const isOnScoreList = (attempts, word) => {
  const found = _.findWhere(attempts, {word: word});
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

// Abstraction to handle pre-composedstate received from server
// (ie, leave top level keys untouched)
export const immutifyState = (obj) => {
  let objMut = _.extend({}, obj);

  Object
    .keys(objMut)
    .forEach(key => {
      objMut[key] = fromJS(objMut[key]);
    });

  return objMut;
};
