import { Map } from 'immutable'
import { bindActionCreators } from 'redux'
import { isFSA } from 'flux-standard-action'

import configureStore from '../../store'
import * as actionCreators from '../../actions'
import * as helpers from '../../helpers/word'

describe('addAttempt', () => {
  it('is FSA-compliant', () => {
    expect(isFSA(actionCreators.addAttempt('bite', 4))).toBe(true)
  })

  it('returns an action to add an attempt', () => {
    expect(actionCreators.addAttempt('bite', 4)).toEqual({
      type: 'ADD_ATTEMPT',
      payload: {
        word: 'bite',
        scored: 4
      }
    })
  })
})

describe('addCheckedAttempt', () => {
  let actions
  let store

  beforeEach(() => {
    const attempts = [
      { word: 'HEY', score: 3 }
    ]

    const matrix = [
      ['O', 'H', 'E', 'Y'],
      ['E', 'E', 'O', 'S'],
      ['N', 'O', 'R', 'M'],
      ['A', 'I', 'X', 'V']
    ]

    store = configureStore({ attempts, matrix })
    actions = bindActionCreators(actionCreators, store.dispatch)
    jest.spyOn(helpers, 'isOnDictionary').mockReturnValue(true)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('validates correct word', async () => {
    await actions.addCheckedAttempt('norm')
    const { attempts } = store.getState()
    expect(attempts.includes(Map({ word: 'NORM', score: 4 }))).toBe(true)
  })

  it('invalidates word which is not on Board', async () => {
    await actions.addCheckedAttempt('fake')
    const { attempts } = store.getState()
    expect(attempts.includes(Map({ word: 'FAKE', score: '✘' }))).toBe(true)
  })

  it('invalidates word which is already on ScoreList', async () => {
    await actions.addCheckedAttempt('hey')
    const { attempts } = store.getState()
    expect(attempts.includes(Map({ word: 'HEY', score: '✘' }))).toBe(true)
  })

  it('invalidates word not on Dictionary', async () => {
    await actions.addCheckedAttempt('hey')

    helpers.isOnDictionary.mockReturnValue(false)

    await actions.addCheckedAttempt('smv')

    const { attempts } = store.getState()
    expect(attempts.includes(Map({ word: 'SMV', score: '✘' }))).toBe(true)
  })
})
