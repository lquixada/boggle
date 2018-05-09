import React from 'react';
import styled from 'styled-components';

class Title extends React.Component {
  render() {
    return (
      <Label>BOGGLE</Label>
    );
  }
}

const Label = styled.Text`
  color: #fff;
  font-size: 30;
  font-weight: 900;
  letter-spacing: -1;
  text-align: center;
  box-shadow: 2px 2px 5px #000;
`;

export default Title;
