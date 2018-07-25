import nock from 'nock'
import {fromJS} from 'immutable'

import {isOnBoard, isOnDictionary, isOnScoreList} from '../word'

describe('Helpers', () => {
  let attempts

  beforeEach(() => {
    attempts = fromJS([
      {word: 'word1'},
      {word: 'word2'}
    ])
  })

  describe('isOnScoreList', () => {
    it('checks word has been attempted', () => {
      expect(isOnScoreList(attempts, 'word1')).toBe(true)
    })

    it('checks word has not been attempted', () => {
      expect(isOnScoreList(attempts, 'word3')).toBe(false)
    })
  })

  describe('isOnBoard', () => {
    let matrix

    beforeEach(() => {
      matrix = fromJS([
        ['E', 'H', 'R', 'T'],
        ['B', 'I', 'T', 'E'],
        ['G', 'I', 'S', 'F'],
        ['A', 'M', 'N', 'O']
      ])
    })

    it('checks if a word is on the board', () => {
      expect(isOnBoard(matrix, 'bite')).toBe(true)
    })

    it('checks if a word is not on the board', () => {
      expect(isOnBoard(matrix, 'word')).toBe(false)
    })
  })

  describe('isOnDictionary', () => {
    afterEach(() => {
      nock.cleanAll()
    })

    it('checks word has been attempted', async () => {
      nock('https://en.wiktionary.org/').get(/w\/api.php/).reply(200, {
        'query': {
          'pages': {
            '45': {}
          }
        }
      })

      const result = await isOnDictionary('word')
      expect(result).toBe(true)
    })

    it('checks word has been attempted', async () => {
      nock('https://en.wiktionary.org/').get(/w\/api.php/).reply(200, {
        'query': {
          'pages': {
            '-1': {}
          }
        }
      })

      const result = await isOnDictionary('n0tAw0rD')
      expect(result).toBe(false)
    })
  })
})
