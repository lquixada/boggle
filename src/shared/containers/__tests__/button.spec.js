import React from 'react';
import {shallow} from 'enzyme';

import {ButtonContainer} from '../button';

describe('<ButtonContainer />', () => {
  it('shows "start" by default', () => {
    const component = shallow(<ButtonContainer />);
    expect(component.prop('text')).toBe('start');
  });

  it('shows "stop" when the game has started', () => {
    const component = shallow(<ButtonContainer started={true} />);
    expect(component.prop('text')).toBe('stop');
  });

  it('shows "start" when the game has stopped', () => {
    const component = shallow(<ButtonContainer started={false} />);
    expect(component.prop('text')).toBe('start');
  });

  it('toggles state from "start" to "stop" when clicked', () => {
    const startGame = jest.fn();
    const component = shallow(<ButtonContainer started={false} startGame={startGame} />);
    component.simulate('click');

    expect(startGame.mock.calls.length).toBe(1);
  });

  it('toggles state from "stop" to "start" when clicked', () => {
    const stopGame = jest.fn();
    const component = shallow(<ButtonContainer started={true} stopGame={stopGame} />);
    component.simulate('click');

    expect(stopGame.mock.calls.length).toBe(1);
  });
});
