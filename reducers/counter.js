export default function counter(state = 0, action) {
  switch (action.type) {
    case 'ADD_ATTEMPT':
      return state + (action.scored? action.word.length : 0);
    default:
      return state;
  }
}
