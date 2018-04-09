import board from '../board';

describe('board', () => {
  it('starts empty', () => {
    let state = board(undefined, {});
    state = state.flatten();
    state = state.join('');
    expect(state.trim()).toBe('');
  });

  it('fills up when game starts', () => {
    let state = board(undefined, {
      type: 'START_GAME'
    });
    state = state.flatten();
    state = state.join('');
    expect(state.trim().length).toBe(16);
  });

  it('resets when game ends', () => {
    let state = board(undefined, {
      type: 'START_GAME'
    });

    state = board(state, {
      type: 'STOP_GAME'
    });

    state = state.flatten();
    state = state.join('');
    expect(state.trim()).toBe('');
  });
});
