export default function started(state = false, action) {
  switch (action.type) {
    case 'START_GAME':
      return true;
    case 'STOP_GAME':
      return false;
    default:
      return state;
  }
}
