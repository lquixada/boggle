import React from 'react';
import {mount} from 'enzyme';

import {InputContainer} from '../input';

describe('<InputContainer />', () => {
  it('is disabled by default', () => {
    const component = mount(<InputContainer started={false} />);
    expect(component).toMatchSnapshot();
  });

  it('is enabled when the game has started', () => {
    const component = mount(<InputContainer started={true} />);
    expect(component).toMatchSnapshot();
  });

  it('is disabled when the game has stopped', () => {
    const component = mount(<InputContainer started={false} />);
    expect(component).toMatchSnapshot();
  });

  describe('interaction', () => {
    let component;

    beforeEach(() => {
      const addCheckedAttempt = jest.fn();
      component = mount(<InputContainer addCheckedAttempt={addCheckedAttempt} started={false} />);
    });

    it('doesnt check word when input text is less than 2 characters', () => {
      component.find('input').simulate('change', {target: {value: 'H'}});
      component.find('input').simulate('keyup', {which: 13}); // Enter

      expect(component.props().addCheckedAttempt).not.toHaveBeenCalled();
    });

    it('checks word when input text is greater than or equal to 2 characters', () => {
      component.find('input').simulate('change', {target: {value: 'Hi'}});
      component.find('input').simulate('keyup', {which: 13}); // Enter

      expect(component.props().addCheckedAttempt).toHaveBeenCalled();
    });

    it('is cleared when the game stops', () => {
      const component = mount(<InputContainer started={true} />);

      component.find('input').simulate('change', {target: {value: 'Hi'}});
      component.setProps({started: false});

      expect(component.state('value')).toBe('');
    });
  });
});
