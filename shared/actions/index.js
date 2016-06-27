import { isOnScoreList, isOnBoard, isOnDictionary } from '../utils/helper';

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
