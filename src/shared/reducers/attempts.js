import {Map, List} from 'immutable'

export const attempt = (state = Map(), action) => {
  switch (action.type) {
    case 'ADD_ATTEMPT':
      return Map({
        word: action.payload.word,
        score: (action.payload.scored ? action.payload.word.length : '✘')
      })
    default:
      return state
  }
}

export const attempts = (state = List(), action) => {
  switch (action.type) {
    case 'ADD_ATTEMPT':
      return state.push(attempt(undefined, action))
    case 'STOP_GAME':
      return List()
    default:
      return state
  }
}

export default attempts
