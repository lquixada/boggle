import React from 'react';
import {mount} from 'enzyme';
import {ClockContainer} from '../clock';

jest.useFakeTimers();

describe('<ClockContainer />', () => {
  let component;

  beforeEach(() => {
    const stopGame = jest.fn();

    component = mount(<ClockContainer stopGame={stopGame} />);
    component.instance().alert = jest.fn();
  });

  it('displays 60 by default', () => {
    expect(component.update().find('Clock').prop('secs')).toBe(60);
  });

  it('decrements when the game starts', () => {
    component.setProps({started: true});

    expect(component.update().find('Clock').prop('secs')).toBe(59);

    jest.advanceTimersByTime(1000);
    expect(component.update().find('Clock').prop('secs')).toBe(58);

    jest.advanceTimersByTime(1000);
    expect(component.update().find('Clock').prop('secs')).toBe(57);
  });

  it('stops when time have been elapsed', () => {
    component.setProps({started: true});

    jest.advanceTimersByTime(30000);

    component.setProps({started: false});

    expect(component.update().find('Clock').prop('secs')).toBe(60);
  });

  it('stops when time have been elapsed', () => {
    component.setProps({started: true});

    jest.advanceTimersByTime(60000);
    expect(component.props().stopGame).toHaveBeenCalled();
  });

  it('displays 60 when the game stops', () => {
    component.setProps({started: true});

    jest.advanceTimersByTime(60000);
    expect(component.update().find('Clock').prop('secs')).toBe(0);
  });
});
