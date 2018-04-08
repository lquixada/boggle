import React from 'react';
import {mount} from 'enzyme';
import {fromJS} from 'immutable';

import Board from '../board';

describe('<Board />', () => {
  it('is empty by default', () => {
    const matrix = fromJS([
      [' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ']
    ]);
    const component = mount(<Board matrix={matrix}/>);

    expect(component.find('table').text().trim()).toHaveLength(0);
  });

  it('is filled when the game has started', () => {
    const matrix = fromJS([
      ['E', 'H', 'R', 'T'],
      ['B', 'I', 'T', 'E'],
      ['G', 'I', 'S', 'F'],
      ['A', 'M', 'N', 'O']
    ]);
    const component = mount(<Board matrix={matrix}/>);

    expect(component.find('table').text().trim()).toHaveLength(16);
  });
});