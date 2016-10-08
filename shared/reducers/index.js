import {combineReducers} from 'redux';
import attempts from './attempts';
import matrix from './board';
import counter from './counter';
import started from './started';

export default combineReducers({
  attempts,
  counter,
  started,
  matrix
});
