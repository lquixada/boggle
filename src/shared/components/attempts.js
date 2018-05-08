import React from 'react';
import styled from 'styled-components';

const Attempts = ({attempts}) => (
  <Table>
    <tbody>
      {attempts.map((attempt, i) =>
        <tr key={i}>
          <Td>{attempt.get('word')}</Td>
          <Td>{attempt.get('score')}</Td>
        </tr>
      )}
    </tbody>
  </Table>
);

const Table = styled.table`
  margin: 1rem auto;
  width: 100%;
`;

const Td = styled.td`
  color: #fff;
  font-size: 1.2rem;

  &:first-child {
    padding-left: 1rem;
    text-align: left;
  }

  &:last-child {
    padding-right: 1rem;
    text-align: right;
  }
`;

export default Attempts;
