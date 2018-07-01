import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

import {flex} from '../../helpers'

export const Copyright = () => (
  <Wrapper>
    &copy; Copyright 2016 <Link to='/about'>Leonardo Quixadá</Link>. All rights reserved.
    <a href='https://travis-ci.org/lquixada/boggle'>
      <BuildStatus src='https://travis-ci.org/lquixada/boggle.svg?branch=master' />
    </a>
  </Wrapper>
)

const Wrapper = styled.div`
  ${flex('3 0')};
  line-height: 2rem;
`

const BuildStatus = styled.img`
  opacity: .5;
  vertical-align: middle;
  height: 1.8rem;
  margin-left: .5rem;
  -webkit-filter: grayscale(100%);

  &:hover {
    opacity: 1;
    filter: grayscale(0%);
    -webkit-filter: grayscale(0%);
  }
`
