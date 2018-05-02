import {fromJS} from 'immutable';
import fetch from 'cross-fetch';

import config from '../../shared/config';
import BoardChecker from './board-checker';

export const isElectron = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  return userAgent.indexOf(' electron/') > -1;
};

export const publicPath = () => {
  return isElectron()? './public/images/': '/images/';
};

export const img = (filename) => {
  return `${publicPath()}${filename}`;
};

export const isOnScoreList = (attempts, word) =>
  attempts.some((attempt) => attempt.get('word') === word);

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
  const root = {};
  const immutable = fromJS(obj);

  immutable.forEach((value, key) => {
    root[key] = value;
  });

  return root;
};
