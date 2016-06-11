import _ from 'underscore';
import BoardChecker from '../utils/board-checker';
import Dictionary from '../utils/dictionary';

export const addAttempt = (word, scored) => ({
  type: 'ADD_ATTEMPT',
  word,
  scored
});

export const startGame = () => ({
  type: 'START_GAME'
});

export const stopGame = () => ({
  type: 'STOP_GAME'
});

const isOnScoreList = (attempts, word) => {
  const found = _.findWhere(attempts, {word: word});
  return Boolean(found);
}

const isOnBoard = (matrix, word) => {
  const board = new BoardChecker(matrix);
  return board.hasWord(word);
}

const isOnDictionary = (word) => {
  const dictionary = new Dictionary();
  return dictionary.check(word);
}

export const addCheckedAttempt = (word) => {
  word = word.toUpperCase();

  return (dispatch, getState) => {
    const state = getState();

    return Promise.all([
      !isOnScoreList(state.attempts, word),
      isOnBoard(state.matrix, word),
      isOnDictionary(word)
    ]).then((values) => {
      const result = values.every(v => v);
      return dispatch(addAttempt(word, result));
    });
  };
};
