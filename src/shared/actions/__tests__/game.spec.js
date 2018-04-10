import {startGame, stopGame} from '../';

describe('startGame', () => {
  it('returns an action to start the game', () => {
    expect(startGame()).toEqual({
      type: 'START_GAME',
    });
  });
});

describe('stopGame', () => {
  it('returns an action to stop the game', () => {
    expect(stopGame()).toEqual({
      type: 'STOP_GAME',
    });
  });
});

