import fetch from 'cross-fetch'

import config from '../../shared/config'
import { BoardChecker } from './board-checker'

export const isOnScoreList = (attempts, word) =>
  attempts.some((attempt) => attempt.get('word') === word)

export const isOnBoard = (matrix, word) => {
  const board = new BoardChecker(matrix)
  return board.hasWord(word)
}

export const isOnDictionary = (word) => {
  const url = `${config.wiktionaryUrl}&titles=${word.toLowerCase()}`

  return fetch(url)
    .then((response) => response.json())
    // The "-1" property means "word not found"
    .then((data) => !data.query.pages[-1])
}
