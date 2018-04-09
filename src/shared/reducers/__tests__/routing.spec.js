
import routing, {LOCATION_CHANGE} from '../routing';

describe('routing', () => {
  it('starts with null location', () => {
    expect(routing(undefined, undefined).get('locationBeforeTransitions')).toBeNull();
  });

  it('increments', () => {
    const state = routing(undefined, {
      type: LOCATION_CHANGE,
      payload: 'new location'
    });

    expect(state.get('locationBeforeTransitions')).toBe('new location');
  });
});
