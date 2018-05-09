import React from 'react';
import styled from 'styled-components';

import {Attempts} from '.';
import {box, flex} from '../../helpers';

export class Score extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <h2>Score: {this.props.counter}</h2>
        </Header>
        <Section>
          <Attempts attempts={this.props.attempts} />
        </Section>
      </Wrapper>
    );
  }
}

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
