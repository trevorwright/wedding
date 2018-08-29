import React from 'react'
import styled from 'styled-components'
import { transparentize } from 'polished'

const NAV_ITEMS = [{ text: 'Home' }, { text: 'Story' }, { text: 'Gallery' }, { text: 'Event' }]

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
  font-weight: 200;
`

const InitialsLogo = styled.div`
  font-size: 22px;
  letter-spacing: 8px;
`

const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
`

const NavItems = styled.ul`
  display: flex;
`

const NavItem = styled.li`
  position: relative;
  margin-right: 32px;

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
      <ItemsContainer>
        <NavItems>
          {NAV_ITEMS.map(({ text }) => (
            <NavItem key={text}>{text}</NavItem>
          ))}
        </NavItems>
        <RsvpButton>RSVP</RsvpButton>
      </ItemsContainer>
    </NavContainer>
  </header>
)

export default Nav
