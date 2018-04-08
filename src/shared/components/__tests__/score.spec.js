import React from 'react';
import {mount} from 'enzyme';
import {fromJS} from 'immutable';

import Score from '../score';

describe('<Score />', () => {
  it('is empty by default', () => {
    const component = mount(<Score attempts={fromJS([])} />);

    expect(component.find('tr').exists()).toBe(false);
  });

  it('adds a valid attempt', () => {
    const attempts = fromJS([{word: 'someword', score: '8'}]);
    const component = mount(<Score attempts={attempts} />);

    expect(component.find('td').at(0).text()).toBe('someword');
    expect(component.find('td').at(1).text()).toBe('8');
  });

  it('adds an invalid attempt', () => {
    const attempts = fromJS([{word: 'someword', score: '✘'}]);
    const component = mount(<Score attempts={attempts} />);

    expect(component.find('td').at(0).text()).toBe('someword');
    expect(component.find('td').at(1).text()).toBe('✘');
  });

  it('shows the score', () => {
    const component = mount(<Score attempts={fromJS([])} counter={8} />);

    expect(component.find('h2').text()).toBe('Score: 8');
  });
});
