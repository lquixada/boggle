import React from 'react';
import styled from 'styled-components';

import Board from '../containers/board';
import Button from '../containers/button';
import Copyright from '../components/copyright';
import Clock from '../containers/clock';
import Input from '../containers/input';
import Score from '../containers/score';
import Social from '../components/social';
import Title from '../components/title';

class Game extends React.Component {
  render() {
    return (
      <Grid>
        <Header>
          <HeaderTop>
            <Title />
            <Button />
          </HeaderTop>
          <HeaderBottom>
            <Input />
          </HeaderBottom>
        </Header>
        <Content>
          <ContentTop>
            <Clock />
            <Score />
          </ContentTop>
          <Board />
        </Content>
        <Footer>
          <Copyright />
          <Social />
        </Footer>
      </Grid>
    );
  }
}

const Grid = styled.View`
  flex: 1;
  display: flex;
  background-color: #484848;
`;

const Header = styled.View`
  padding: 20px;
  padding-top: 40px;
  height: 140px;
  background-color: #565656;
`;

const HeaderTop = styled.View`
  margin-bottom: 20px;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HeaderBottom = styled.View`
  flex: 1;
`;

const Content = styled.View`
  flex: 1;
  padding: 20px;
  height: 100%;
`;

const ContentTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-content: space-between;
`;

const Footer = styled.View`
  flex-direction: row;
  padding: 20px;
  background-color: #565656;
`;

export default Game;
