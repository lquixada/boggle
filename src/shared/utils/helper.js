import {fromJS} from 'immutable';
import fetchJsonp from 'fetch-jsonp';
import BoardChecker from '../utils/board-checker';

export const isOnScoreList = (attempts, word) => {
  const found = attempts.find(attempt => attempt.get('word') === word);

  return Boolean(found);
};

export const isOnBoard = (matrix, word) => {
  const board = new BoardChecker(matrix);
  return board.hasWord(word);
};

export const isOnDictionary = (word) => {
  const url = `https://en.wiktionary.org/w/api.php?action=query&format=json&callback=?&titles=${word.toLowerCase()}`;

  return fetchJsonp(url)
    .then(response => response.json())
    .then(data => !data.query.pages[-1]);
};

// Abstraction to handle pre-composed state received from server
// (ie, leave top level keys untouched)
export const immutifyState = (obj) => {
  const objMut = {};

  fromJS(obj).forEach((v, k) => { objMut[k] = v; });

  return objMut;
};
