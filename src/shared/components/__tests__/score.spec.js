import React from 'react'
import { mount } from 'enzyme'
import { fromJS } from 'immutable'

import { Score } from '..'

describe('<Score />', () => {
  it('is empty by default', () => {
    const component = mount(<Score attempts={fromJS([])} />)

    expect(component.find('tr').exists()).toBe(false)
  })

  it('adds a valid attempt', () => {
    const attempts = fromJS([{ word: 'someword', score: '8' }])
    const component = mount(<Score attempts={attempts} />)

    expect(component).toMatchSnapshot()
  })

  it('adds an invalid attempt', () => {
    const attempts = fromJS([{ word: 'someword', score: '✘' }])
    const component = mount(<Score attempts={attempts} />)

    expect(component).toMatchSnapshot()
  })

  it('shows the score', () => {
    const component = mount(<Score attempts={fromJS([])} counter={8} />)

    expect(component).toMatchSnapshot()
  })
})
