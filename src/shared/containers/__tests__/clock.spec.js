import React from 'react';
import {mount} from 'enzyme';
import {ClockContainer} from '../clock';

jest.useFakeTimers();

describe('<ClockContainer />', () => {
  let component;

  beforeEach(() => {
    component = mount(<ClockContainer stopGame={jest.fn()} />);
    component.instance().alert = jest.fn();
  });

  it('displays 60 by default', () => {
    expect(component).toMatchSnapshot();
  });

  it('decrements when the game starts', () => {
    component.setProps({started: true});

    expect(component).toMatchSnapshot();

    jest.advanceTimersByTime(1000);
    component.update();

    expect(component).toMatchSnapshot();

    jest.advanceTimersByTime(1000);
    component.update();

    expect(component).toMatchSnapshot();
  });

  it('stops when time have been elapsed', () => {
    component.setProps({started: true});

    jest.advanceTimersByTime(30000);
    component.update();

    component.setProps({started: false});

    expect(component).toMatchSnapshot();
  });

  it('stops when time have been elapsed', () => {
    component.setProps({started: true});

    jest.advanceTimersByTime(60000);
    component.update();

    expect(component.props().stopGame).toHaveBeenCalled();
  });

  it('displays 60 when the game stops', () => {
    component.setProps({started: true});

    jest.advanceTimersByTime(60000);
    component.update();

    expect(component).toMatchSnapshot();
  });
});
