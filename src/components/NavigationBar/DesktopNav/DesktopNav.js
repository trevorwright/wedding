import React from 'react'
import styled from 'styled-components'
import { media, hoverUnderline } from '../../../styles'

import NavLink from '../NavLink'
import NavLogo from '../NavLogo'

const NavContainer = styled.nav`
  position: fixed;
  z-index: 10;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  height: 60px;

  font-size: 18px;
  font-weight: 300;
  background: rgba(0, 0, 0, 0.4);

  ${media.medium`
    font-size: 22px;
  `};

  ${media.smallDown`
    display: none;
  `};

  a {
    text-decoration: none;
    color: #fff;
  }
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

  ${hoverUnderline('white')};
`

const Nav = ({ items }) => (
  <header>
    <NavContainer>
      <NavLogo />
      <NavItems>
        {items.map(({ text, destination }) => (
          <NavItem key={text}>
            <NavLink destination={destination}>{text}</NavLink>
          </NavItem>
        ))}
      </NavItems>
    </NavContainer>
  </header>
)

export default Nav
