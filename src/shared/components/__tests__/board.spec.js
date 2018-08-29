import React from 'react'
import { mount } from 'enzyme'
import { fromJS } from 'immutable'

import { Board } from '..'

describe('<Board />', () => {
  it('is empty by default', () => {
    const matrix = fromJS([
      [' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ']
    ])
    const component = mount(<Board matrix={matrix} />)

    expect(component).toMatchSnapshot()
  })

  it('is filled when the game has started', () => {
    const matrix = fromJS([
      ['E', 'H', 'R', 'T'],
      ['B', 'I', 'T', 'E'],
      ['G', 'I', 'S', 'F'],
      ['A', 'M', 'N', 'O']
    ])
    const component = mount(<Board matrix={matrix} />)

    expect(component).toMatchSnapshot()
  })
})
