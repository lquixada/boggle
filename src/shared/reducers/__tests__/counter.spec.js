
import counter from '../counter';

describe('counter', () => {
  it('starts on zero', () => {
    expect(counter(undefined, {})).toBe(0);
  });

  it('increments', () => {
    const state = counter(undefined, {
      type: 'ADD_ATTEMPT',
      payload: {
        word: 'bite',
        scored: true
      }
    });

    expect(state).toBe(4);
  });

  it('resets when game ends', () => {
    let state = counter(undefined, {
      type: 'ADD_ATTEMPT',
      payload: {
        word: 'bite',
        scored: true
      }
    });

    state = counter(state, {
      type: 'STOP_GAME'
    });

    expect(state).toBe(0);
  });
});
