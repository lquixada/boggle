import React from 'react';
import styled from 'styled-components';

import {box, flex} from '../helpers';

const Attempt = ({attempt}) => (
  <tr>
    <Cell>{attempt.get('word')}</Cell>
    <Cell>{attempt.get('score')}</Cell>
  </tr>
);

const Score = ({counter, attempts}) => (
  <Wrapper>
    <Header>
      <h2>Score: {counter}</h2>
    </Header>
    <Section>
      <Table>
        <tbody>
          {attempts.map((attempt, i) =>
            <Attempt key={i} attempt={attempt} />)}
        </tbody>
      </Table>
    </Section>
  </Wrapper>
);

const Wrapper = styled.div`
  ${flex.display()}
  ${flex.flow('column', 'nowrap')}
  ${flex(3)}
  color: #fff;

  @media (max-width: 540px) {
    ${flex('none')}
  }
`;

const Header = styled.header`
  margin-bottom: 1rem;
`;

const Section = styled.section`
  ${flex(1)}
  ${box()}
  width: 100%;
  overflow-x: hidden;
  overflow-y: visible;
  scrollbar-face-color: #2b2b2b;
  scrollbar-shadow-color: #404040;
  scrollbar-highlight-color: #404040;
  scrollbar-3dlight-color: #404040;
  scrollbar-darkshadow-color: #2d2c4d;
  scrollbar-track-color: #404040;
  scrollbar-arrow-color: #2b2b2b;

  @media (max-width: 540px) {
    display: none;
  }
`;

const Table = styled.table`
  margin: 1rem auto;
  width: 100%;
`;

const Cell = styled.td`
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

export default Score;
