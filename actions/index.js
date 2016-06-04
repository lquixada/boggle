export const addAttempt = (word, scored) => ({
  type: 'ADD_ATTEMPT',
  word,
  scored
});

export const incrementCounter = () => ({
  type: 'INCREMENT_COUNTER'
});

export const startGame = () => ({
  type: 'START_GAME'
});

export const stopGame = () => ({
  type: 'STOP_GAME'
});
