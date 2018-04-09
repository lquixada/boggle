import {fromJS} from 'immutable';
import fetch from 'cross-fetch';

import config from '../../shared/config';
import BoardChecker from '../utils/board-checker';

export const isOnScoreList = (attempts, word) => {
  const found = attempts.find((attempt) => attempt.get('word') === word);

  return Boolean(found);
};

export const isOnBoard = (matrix, word) => {
  const board = new BoardChecker(matrix);
  return board.hasWord(word);
};

export const isOnDictionary = (word) => {
  const url = `${config.url.wiktionary}&titles=${word.toLowerCase()}`;

  return fetch(url)
    .then((response) => response.json())
    // The "-1" property means "word not found"
    .then((data) => !data.query.pages[-1]);
};

// Abstraction to handle pre-composed state received from server
// (ie, leave top level keys untouched)
export const immutifyState = (obj) => {
  const objMut = {};

  fromJS(obj).forEach((v, k) => {
    objMut[k] = v;
  });

  return objMut;
};
