import {isOnScoreList, isOnBoard, isOnDictionary} from '../helpers'

export const addAttempt = (word, scored) => ({
  type: 'ADD_ATTEMPT',
  payload: {
    word,
    scored
  }
})

export const addCheckedAttempt = (word) => async (dispatch, getState) => {
  let onDictionary = false
  const state = getState()
  word = word.toUpperCase()

  const [onBoard, onScoreList] = await Promise.all([
    isOnBoard(state.matrix, word),
    isOnScoreList(state.attempts, word)
  ])

  if (onBoard && !onScoreList) {
    onDictionary = await isOnDictionary(word)
  }

  return dispatch(addAttempt(word, onDictionary))
}
