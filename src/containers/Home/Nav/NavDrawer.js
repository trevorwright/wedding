import React from 'react'
import styled, { css } from 'styled-components'
import { lighten } from 'polished'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { media } from '../../../styles'
import navItems from './nav-items'

const Drawer = styled.nav`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  background: #fff;
  width: 80vw;
  z-index: 10;
  transition: transform 0.4s ease;

  transform: translateX(100%);

  ${props =>
    props.open &&
    css`
      transform: translateX(0);
    `};

  ${media.small`
    display: none;
  `};
`

const Header = styled.div`
  padding: 12px;
  text-align: center;
  font-size: 18px;
  border-bottom: 1px solid #dbdbdb;
`

const CloseButton = styled.button`
  position: absolute;
  left: 12px;

  &:hover,
  &:active {
    color: ${lighten(0.3, '#363636')};
  }
`

const MenuItems = styled.ul``

const MenuItem = styled.li`
  position: relative;
  text-align: center;
  padding: 16px;

  &:after {
    position: absolute;
    content: '';
    width: 100%;
    bottom: 12px;
    left: 0;
    height: 1px;
    background: #363636;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    &:after {
      transform: scaleX(0.9);
    }
  }
`

const NavDrawer = ({ onClose, open }) => (
  <Drawer open={open}>
    <Header>
      <CloseButton onClick={onClose}>
        <FontAwesomeIcon icon={faTimes} size="lg" />
      </CloseButton>
      Menu
    </Header>
    <MenuItems>
      {navItems.map(({ text }) => (
        <MenuItem key={text}>{text}</MenuItem>
      ))}
    </MenuItems>
  </Drawer>
)

export default NavDrawer
