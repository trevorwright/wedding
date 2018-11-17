import React from 'react'
import styled from 'styled-components'
import * as Scroll from 'react-scroll'
import { media } from '../../../styles'
import navItems from './nav-items'

import NavLogo from './NavLogo'

const NAV_HEIGHT = 60

const NavContainer = styled.nav`
  position: fixed;
  z-index: 10;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  height: ${NAV_HEIGHT}px;

  font-size: 18px;
  font-weight: 300;
  color: #fff;
  background: rgba(0, 0, 0, 0.4);

  ${media.medium`
    font-size: 22px;
  `};

  ${media.smallDown`
    display: none;
  `};
`

const NavItems = styled.ul`
  display: flex;
`

const NavItem = styled.li`
  position: relative;
  margin-left: 16px;

  ${media.medium`
    margin-left: 32px;
  `};

  &:after {
    content: '';
    position: absolute;
    height: 1px;
    width: 100%;
    bottom: 0;
    left: 0;
    background: #fff;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    &:after {
      transform: scaleX(1);
    }
  }
`
const Nav = () => (
  <header>
    <NavContainer>
      <NavLogo />
      <NavItems>
        {navItems.map(({ text, target }) => (
          <NavItem key={text}>
            <Scroll.Link to={target} offset={-NAV_HEIGHT} smooth duration={500}>
              {text}
            </Scroll.Link>
          </NavItem>
        ))}
      </NavItems>
    </NavContainer>
  </header>
)

export default Nav
