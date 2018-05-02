import {isElectron} from '../shared/helpers';

let history;

if (isElectron()) {
  history = require('history').createMemoryHistory();
} else {
  history = require('history').createBrowserHistory();
}

export default history;
