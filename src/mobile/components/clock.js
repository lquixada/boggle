import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import styled from 'styled-components/native'

export class Clock extends React.Component {
  getSecs () {
    return this.props.secs < 10 ? `0${this.props.secs}` : this.props.secs
  }

  getTimeStyle () {
    return this.props.secs < 10 ? { color: 'red' } : {}
  }

  render () {
    return (
      <Label>
        Time left:{' '}
        <Text style={this.getTimeStyle()}>
          00:{this.getSecs()}
        </Text>
      </Label>
    )
  }
}

const Label = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`

Clock.propTypes = {
  secs: PropTypes.number.isRequired
}
