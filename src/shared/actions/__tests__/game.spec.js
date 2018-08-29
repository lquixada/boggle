import { isFSA } from 'flux-standard-action'

import { startGame, stopGame } from '../game'

describe('startGame', () => {
  it('is FSA-compliant', () => {
    expect(isFSA(startGame())).toBe(true)
  })

  it('returns an action to start the game', () => {
    expect(startGame()).toEqual({
      type: 'START_GAME'
    })
  })
})

describe('stopGame', () => {
  it('is FSA-compliant', () => {
    expect(isFSA(stopGame())).toBe(true)
  })

  it('returns an action to stop the game', () => {
    expect(stopGame()).toEqual({
      type: 'STOP_GAME'
    })
  })
})
