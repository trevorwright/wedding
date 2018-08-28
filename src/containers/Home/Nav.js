import React from 'react'
import styled from 'styled-components'
import { transparentize } from 'polished'

const NavContainer = styled.nav`
  position: absolute;
  z-index: 10;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 12px 16px;

  font-size: 22px;
  font-weight: 300;
`

const InitialsLogo = styled.div`
  font-size: 22px;
  letter-spacing: 8px;
  font-weight: 200;
`

const RsvpButton = styled.button`
  border: 1px solid #fff;
  border-radius: 5px;
  color: #fff;
  padding: 6px 10px 2px 10px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: ${transparentize(0.5, '#fff')};
  }

  &:active {
    background: ${transparentize(0.3, '#fff')};
  }
`

const Nav = () => (
  <header>
    <NavContainer>
      <InitialsLogo>K&T</InitialsLogo>
      <div>
        <RsvpButton>RSVP</RsvpButton>
      </div>
    </NavContainer>
  </header>
)

export default Nav
