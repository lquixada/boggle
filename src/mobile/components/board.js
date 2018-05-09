import React from 'react';
import styled from 'styled-components';

export class Board extends React.Component {
  render() {
    return (
      <Table>
        {this.props.matrix.map((letters, i) =>
          <Tr key={i}>
            {letters.map((letter, i) =>
              <Td key={i}>
                <Letter>{letter}</Letter>
              </Td>
            )}
          </Tr>
        )}
      </Table>
    );
  }
}

const Table = styled.View`
  flex: 1;
  margin-top: 10;
`;

const Tr = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-content: space-between;
`;

const Td = styled.View`
  margin-bottom: 5;
  width: 80;
  height: 85;
  background-color: #fff;
  border-radius: 4;
  align-items: center;
  justify-content: center;
`;

const Letter = styled.Text`
  color: #333;
  font-size: 40;
`;
