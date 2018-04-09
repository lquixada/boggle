import React from 'react';
import {mount} from 'enzyme';

import Input from '../input';

describe('<Input />', () => {
  let component;

  beforeEach(() => {
    component = mount(<Input
      value={'word'}
      started={false}
      onChange={jest.fn()}
      onEnter={jest.fn()}
    />);
    component.instance().refs.word.focus = jest.fn();
  });

  it('is blurred by default', () => {
    expect(component.instance().refs.word.focus).not.toHaveBeenCalled();
  });

  it('is focused when game starts', () => {
    component.setProps({started: true});

    expect(component.instance().refs.word.focus).toHaveBeenCalled();
  });
});
