import React from 'react';
import styled from 'styled-components';

class Button extends React.Component {
  render() {
    return (
      <ButtonInput
        onPress={this.props.onClick}
        underlayColor="#286f23"
      >
        <Label>{this.props.text}</Label>
      </ButtonInput>
    );
  }
}

const ButtonInput = styled.TouchableHighlight`
  width: 100px;
  height: 44px;
  padding: 10px;
  align-items: center;
  border-radius: 5px;
  background-color: #6c6;
`;

const Label = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export default Button;
