import React from 'react'
import styled from 'styled-components/native'

export class Input extends React.Component {
  getPlaceholder () {
    return !this.props.started ? 'Press start to begin...' : ''
  }

  setRef (input) {
    this.input = input
  }

  render () {
    return (
      <TextInput
        ref={this.setRef.bind(this)}
        value={this.props.value}
        editable={this.props.started}
        onChangeText={(evt) => this.props.onChange(evt)}
        onKeyPress={(evt) => this.props.onEnter(evt)}
        onSubmitEditing={(evt) => this.props.onSubmit(evt)}
        autoCapitalize='none'
        placeholder={this.getPlaceholder()}
        placeholderTextColor='#999'
        selectionColor='#6c6'
        blurOnSubmit={false}
      />
    )
  }
}

const TextInput = styled.TextInput`
  padding: 10px;
  height: 40px;
  font-size: 20px;
  color: #fff;
  border-radius: 5px;
  background-color: #484848;
`
