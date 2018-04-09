import started from '../started';

describe('started', () => {
  it('starts on zero', () => {
    expect(started(undefined, {})).toBe(false);
  });

  it('increments', () => {
    const state = started(undefined, {
      type: 'START_GAME'
    });

    expect(state).toBe(true);
  });

  it('resets when game ends', () => {
    let state = started(undefined, {
      type: 'START_GAME'
    });

    state = started(state, {
      type: 'STOP_GAME'
    });

    expect(state).toBe(false);
  });
});
