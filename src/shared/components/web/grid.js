import styled from 'styled-components'

import {flex} from '../../helpers'

export const Main = styled.main`
  ${flex.display()};
  ${flex.flow('column', 'nowrap')};
  min-width: 35rem;
  height: 100%;
`

export const Container = styled.div`
  ${flex.display()}
  ${flex.justify()}
  ${flex.top()}
  max-width: 54rem;
  width: 100%;
`

export const Box = styled.div`
  background-color: #404040;
  border: .1rem solid;
  border-radius: .5rem;
  border-color: #303030 #505050 #505050 #303030;
`

export const Header = styled.header`
  ${flex.display()}
  ${flex.center()}
  ${flex('none')}
  padding: 2rem;
  background-color: #565656;
`

export const HeaderContainer = Container.extend`
  @media (max-width: 540px) {
    ${flex.wrap('wrap')}
  }
`

export const Section = styled.section`
  ${flex.display()}
  ${flex.center()}
  ${flex('1 0 auto')}
  padding: 2rem;
`

export const SectionContainer = Container.extend`
  @media (max-width: 540px) {
    ${flex.left()}
    ${flex.dir('column')}
  }
`

export const Footer = styled.footer`
  ${flex.display()}
  ${flex.center()}
  ${flex('none')}
  padding: 2rem;
  color: #999;
  font-size: 1.2rem;
  background-color: #565656;

  a {
    display: inline-block;
    color: #999;
  }
`
