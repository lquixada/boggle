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
      isOnBoard(state.matrix, word),
      isOnScoreList(state.attempts, word)
    ])
    .then(([isOnBoard, isScoreList]) => {
      if (isOnBoard && !isScoreList) {
        return isOnDictionary(word);
      }

      return false;
    })
    .then(isOnDictionary => {
      return dispatch(addAttempt(word, isOnDictionary));
    });
  };
};
