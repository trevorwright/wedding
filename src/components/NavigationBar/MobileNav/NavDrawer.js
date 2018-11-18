import React from 'react'
import styled, { css } from 'styled-components'
import { lighten } from 'polished'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { media } from '../../../styles'
import NavLink from '../NavLink'

const Drawer = styled.nav`
  position: fixed;
  right: 0;
  margin-top: 4px;
  background: #fff;
  width: 80vw;
  z-index: 10;
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
  border: 1px solid #dbdbdb;
  border-radius: 5px;

  transition: transform 0.3s ease;
  transform: translateX(100%);

  ${props =>
    props.open &&
    css`
      margin-right: 4px;
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

const NavDrawer = ({ onClose, open, items }) => (
  <Drawer open={open}>
    <Header>
      <CloseButton onClick={onClose}>
        <FontAwesomeIcon icon={faTimes} size="lg" />
      </CloseButton>
      Menu
    </Header>
    <MenuItems>
      {items.map(({ text, destination }) => (
        <MenuItem key={text}>
          <NavLink destination={destination} onClick={onClose}>
            {text}
          </NavLink>
        </MenuItem>
      ))}
    </MenuItems>
  </Drawer>
)

export default NavDrawer
