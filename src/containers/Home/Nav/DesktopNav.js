import React from 'react'
import styled from 'styled-components'
import { media } from '../../../styles'
import navItems from './nav-items'

const NavContainer = styled.nav`
  position: absolute;
  z-index: 10;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 12px 16px;

  font-size: 18px;
  font-weight: 200;

  ${media.medium`
    font-size: 22px;
  `};

  ${media.smallDown`
    display: none;
  `};
`

const InitialsLogo = styled.div`
  font-size: 22px;
  letter-spacing: 8px;
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
    transition: transform 0.3s;
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
      <InitialsLogo>K&T</InitialsLogo>
      <NavItems>
        {navItems.map(({ text }) => (
          <NavItem key={text}>{text}</NavItem>
        ))}
      </NavItems>
    </NavContainer>
  </header>
)

export default Nav
