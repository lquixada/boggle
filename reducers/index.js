import { combineReducers } from 'redux';
import attempts from './attempts';
import counter from './counter';

export default combineReducers({
  attempts,
  counter
});
