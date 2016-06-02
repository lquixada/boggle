export const addAttempt = (word, scored) => {
  return {
    type: 'ADD_ATTEMPT',
    word,
    scored
  }
}

export const incrementCounter = () => {
  return {
    type: 'INCREMENT_COUNTER'
  }
}
