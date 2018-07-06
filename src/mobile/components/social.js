import React from 'react'
import styled from 'styled-components/native'

export class Social extends React.Component {
  render () {
    return (
      <List>
        <Image source={require('../../public/images/logo-github.png')} />
        <Image source={require('../../public/images/logo-facebook.png')} />
        <Image source={require('../../public/images/logo-twitter.png')} />
      </List>
    )
  }
}

const List = styled.View`
  flex-direction: row;
`

const Image = styled.Image`
  margin-left: 15px;
  opacity: .3;
`
