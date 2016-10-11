/* All actions must be FSA-compliant (https://github.com/acdlite/flux-standard-action). */
import {isOnScoreList, isOnBoard, isOnDictionary} from '../utils/helper';

export const addAttempt = (word, scored) => ({
  type: 'ADD_ATTEMPT',
  payload: {
    word,
    scored
  }
});

export const startGame = () => ({
  type: 'START_GAME'
});

export const stopGame = () => ({
  type: 'STOP_GAME'
});

export const addCheckedAttempt = (word) => (dispatch, getState) => {
  const state = getState();
  word = word.toUpperCase();

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
  .then(isOnDictionary => dispatch(addAttempt(word, isOnDictionary)));
};

