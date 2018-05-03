import React from 'react';
import styled from 'styled-components';

import {flex, box} from '../helpers';

const Board = ({matrix}) => (
  <Wrapper>
    <Table>
      <tbody>
        {matrix.map((letters, i) =>
          <Row key={i} letters={letters} />)}
      </tbody>
    </Table>
  </Wrapper>
);

const Row = ({letters}) => (
  <tr>
    {letters.map((letter, i) =>
      <Cell key={i}>{letter}</Cell>)}
  </tr>
);

const Wrapper = styled.div`
  ${flex('3.3')};
  ${box()};
  margin-left: 2rem;
  padding: 1rem;
  height: 40rem;

  @media (max-width: 540px) {
    ${flex('none')};
    margin: 0;
    width: 100%;
  }
`;

const Table = styled.table`
  width: 100%;
`;

const Cell = styled.td`
  width: 9rem;
  height: 9rem;
  color: #333;
  font-size: 4rem;
  background-color: #fff;
  text-align: center;
  text-transform: uppercase;
  border-radius: .4rem;
`;

export default Board;
