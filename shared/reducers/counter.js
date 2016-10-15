export default function counter(state = 0, action) {
  switch (action.type) {
    case 'ADD_ATTEMPT':
      return state + (action.payload.scored ? action.payload.word.length : 0);
    case 'STOP_GAME':
      return 0;
    default:
      return state;
  }
}
