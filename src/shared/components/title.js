import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const Title = () => (
  <Wrapper><Link to="/">BOGGLE</Link></Wrapper>
);

const Wrapper = styled.h1`
  color: #fff;
  font-size: 3rem;
  letter-spacing: -.1rem;
  line-height: 1.5;
  text-shadow: .2rem .4rem .3rem rgba(0, 0, 0, .3);
  vertical-align: middle;

  a {
    color: inherit;
    text-decoration: none;
  }
`;
