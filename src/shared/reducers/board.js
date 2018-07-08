import {Board} from '../helpers'

let board = new Board()
board.clear()

export default (state = board.getMatrix(), action) => {
  switch (action.type) {
    case 'START_GAME':
      board = new Board()
      board.start()
      return board.getMatrix()
    case 'STOP_GAME':
      board = new Board()
      board.clear()
      return board.getMatrix()
    default:
      return state
  }
}
