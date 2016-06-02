const attempt = (state, action) => {
  switch (action.type) {
    case 'ADD_ATTEMPT':
      return {
        word: action.word,
        score: (action.scored ? action.word.length : '✘')
      }
    default:
      return state
  }
}

const attempts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ATTEMPT':
      return [
        ...state,
        attempt(undefined, action)
      ]
    default:
      return state
  }
}

export default attempts;
