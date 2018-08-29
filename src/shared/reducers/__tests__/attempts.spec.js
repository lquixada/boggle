
import { attempt, attempts } from '../attempts'

describe('attempt', () => {
  it('starts empty', () => {
    expect(attempt(undefined, {}).isEmpty()).toBe(true)
  })

  it('adds a correct attempt with a score', () => {
    const action = {
      type: 'ADD_ATTEMPT',
      payload: {
        word: 'bite',
        scored: true
      }
    }

    expect(attempt(undefined, action).get('word')).toBe('bite')
    expect(attempt(undefined, action).get('score')).toBe(4)
  })
})

describe('attempts', () => {
  it('starts empty', () => {
    expect(attempts(undefined, {}).isEmpty()).toBe(true)
  })

  it('adds attempts', () => {
    let state = attempts(undefined, {})

    state = attempts(state, {
      type: 'ADD_ATTEMPT',
      payload: {
        word: 'bite',
        scored: true
      }
    })

    state = attempts(state, {
      type: 'ADD_ATTEMPT',
      payload: {
        word: 'b1t3',
        scored: false
      }
    })

    expect(state.size).toBe(2)
    expect(state.get(0).toJS()).toEqual({
      word: 'bite',
      score: 4
    })
    expect(state.get(1).toJS()).toEqual({
      word: 'b1t3',
      score: '✘'
    })
  })

  it('resets when game ends', () => {
    let state = attempts(undefined, {})

    state = attempts(state, {
      type: 'ADD_ATTEMPT',
      payload: {
        word: 'bite',
        scored: true
      }
    })

    state = attempts(state, {
      type: 'STOP_GAME'
    })

    expect(state.isEmpty()).toBe(true)
  })
})
