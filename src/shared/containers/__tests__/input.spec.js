import React from 'react';
import {mount} from 'enzyme';

import {InputContainer} from '../input';

describe('<InputContainer />', () => {
  it('is disabled by default', () => {
    const component = mount(<InputContainer started={false} />);
    expect(component.find('input').prop('disabled')).toBe(true);
  });

  it('is enabled when the game has started', () => {
    const component = mount(<InputContainer started={true} />);
    expect(component.find('input').prop('disabled')).toBe(false);
  });

  it('is disabled when the game has stopped', () => {
    const component = mount(<InputContainer started={false} />);
    expect(component.find('input').prop('disabled')).toBe(true);
  });
});
