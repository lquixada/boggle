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
  });
});
