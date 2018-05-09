import React from 'react';
import styled from 'styled-components';

import {flex, img} from '../../helpers';

export const Social = () => (
  <Wrapper>
    <List>
      <Item><a href="https://github.com/lquixada/"><Image src={img('logo-github.png')} /></a></Item>
      <Item><a href="https://facebook.com/lquixada/"><Image src={img('logo-facebook.png')} /></a></Item>
      <Item><a href="https://twitter.com/lquixada/"><Image src={img('logo-twitter.png')} /></a></Item>
    </List>
  </Wrapper>
);

const Wrapper = styled.div`
  ${flex('1 0')}
`;

const List = styled.ul`
  ${flex.display()}
  ${flex.right()}
`;

const Item = styled.li`
  margin-left: 1rem;
  list-style: none;
`;

const Image = styled.img`
  width: 2rem;
  height: 2rem;
  opacity: .3;
  vertical-align: middle;

  &:hover {
    opacity: .7;
  }
`;
