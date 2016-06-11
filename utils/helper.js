import _ from 'underscore';

import BoardChecker from '../utils/board-checker';
import Dictionary from '../utils/dictionary';

export const isOnScoreList = (attempts, word) => {
  const found = _.findWhere(attempts, {word: word});
  return Boolean(found);
}

export const isOnBoard = (matrix, word) => {
  const board = new BoardChecker(matrix);
  return board.hasWord(word);
}

export const isOnDictionary = (word) => {
  const dictionary = new Dictionary();
  return dictionary.check(word);
}
