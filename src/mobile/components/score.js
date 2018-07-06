import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

export class Score extends React.Component {
  render () {
    return (
      <Label>Score: {this.props.counter}</Label>
    )
  }
}

const Label = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`

Score.propTypes = {
  counter: PropTypes.number.isRequired
}
