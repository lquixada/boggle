import {isOnScoreList, isOnBoard, isOnDictionary} from '../helpers';

export const addAttempt = (word, scored) => ({
  type: 'ADD_ATTEMPT',
  payload: {
    word,
    scored
  }
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
    .then((isOnDictionary) => dispatch(addAttempt(word, isOnDictionary)));
};
