import React from 'react';
import styled from 'styled-components';

import {
  Main, Container, Header, HeaderContainer, Section, SectionContainer, Footer, Copyright, Ribbon, Social, Title
} from '..';

import {box} from '../../helpers';

export const About = () => (
  <Main>
    <Ribbon />

    <Header>
      <HeaderContainer>
        <Title />
      </HeaderContainer>
    </Header>

    <Section>
      <SectionContainer>
        <Body>
          <Box>
            <Image src="https://s.gravatar.com/avatar/a0ac79788f87ca12cda519b3a1bb2a7c?s=100" />
          </Box>

          <Subtitle>About me</Subtitle>

          <P>Loving Software, Delivering Product.</P>

          <P>I believe technology is a means to an end. Every tool, every language or technique we learn throughout
          our career serves to higher purposes: improve the company culture, enable clients' ambitions and push
          mankind forward. Everything a software engineer touch has an impact in his user's lives, including his
          peers and superiors. That's why software excellence is so crucial.</P>

          <P>Solving complex problems isn't just about the right tools or the right algorithms. It is about hearing
          users, providing new perspectives and delivering real value to the ecosystem in sustainable and scalable
          way. The only way to achieve that is making things different.</P>

          <P>Innovation is key. To create new ideas or to make old things better is to reassess the pre-established
          paradigms. I believe my multidisciplinary education and thirteen years of experience in the Internet
          industry have put me in a position able to provide that. Having a broad base of technical skills can bring
          new perspectives to the table and unlock distinct ways of thinking.</P>
        </Body>
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

const Body = styled.div`
  width: 100%;
  font-size: 1.3rem;
  color: #999;
`;

const Box = styled.span`
  ${box()}
  margin: 0 1rem .5rem 0;
  float: left;
`;

const Subtitle = styled.h2`
  margin-bottom: 1rem;
  color: #ddd;
`;

const P = styled.p`
  margin-bottom: 1rem;
`;

const Image = styled.img`
  margin: 1rem;
  width: 10rem;
  height: 10rem;
`;
