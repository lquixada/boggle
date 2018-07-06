import React from 'react'
import styled from 'styled-components/native'

export class Copyright extends React.Component {
  render () {
    return (
      <Label>
        © Copyright 2016 Leonardo Quixadá. All rights reserved.
      </Label>
    )
  }
}

const Label = styled.Text`
  color: #999;
  width: 60%;
`
