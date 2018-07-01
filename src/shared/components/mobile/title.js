import React from 'react'
import styled from 'styled-components'

export class Title extends React.Component {
  render () {
    return (
      <Label>BOGGLE</Label>
    )
  }
}

const Label = styled.Text`
  color: #fff;
  font-size: 30;
  font-weight: 900;
  letter-spacing: -1;
  text-align: center;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, .5);
`
