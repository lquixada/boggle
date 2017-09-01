import {Map, List} from 'immutable';

const attempt = (state = Map(), action) => {
  switch (action.type) {
    case 'ADD_ATTEMPT':
      return Map({
        word: action.payload.word,
        score: (action.payload.scored ? action.payload.word.length : '✘')
      });
    default:
      return state;
  }
};

const attempts = (state = List(), action) => {
  switch (action.type) {
    case 'ADD_ATTEMPT':
      return state.push(attempt(undefined, action));
    case 'STOP_GAME':
      return List();
    default:
      return state;
  }
};

export default attempts;