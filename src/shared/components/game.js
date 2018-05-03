import React from 'react';
import styled from 'styled-components';

import Input from '../containers/input';
import Board from '../containers/board';
import Button from '../containers/button';
import Clock from '../containers/clock';
import Copyright from './copyright';
import Social from './social';
import Score from '../containers/score';
import Title from './title';
import Ribbon from './ribbon';
import {Main, Container, Header, HeaderContainer, Section, SectionContainer, Footer} from './grid';

import {flex} from '../helpers';

const Game = () => (
  <Main>
    <Ribbon />

    <Header>
      <HeaderContainer>
        <Title />
        <Input />
        <Button />
      </HeaderContainer>
    </Header>

    <Section>
      <SectionContainer>
        <Aside>
          <Clock />
          <Score />
        </Aside>
        <Board />
      </SectionContainer>
    </Section>

    <Footer>
      <Container>
        <Copyright />
        <Social />
      </Container>
    </Footer>
  </Main>
);

const Aside = styled.aside`
  ${flex.display()}
  ${flex.justify()}
  ${flex.flow('column', 'nowrap')}
  ${flex(1)}
  height: 40rem;
  vertical-align: top;

  @media (max-width: 540px) {
    ${flex('none')}
    ${flex.dir('row')}
    margin: 0;
    width: 100%;
    height: auto;
  }
`;

export default Game;
