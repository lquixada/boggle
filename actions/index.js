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
