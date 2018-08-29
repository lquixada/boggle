import { combineReducers } from 'redux'

import routing from './routing'
import attempts from './attempts'
import matrix from './board'
import counter from './counter'
import started from './started'

export default combineReducers({
  routing,
  attempts,
  counter,
  started,
  matrix
})
