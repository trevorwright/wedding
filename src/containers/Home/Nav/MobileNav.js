import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { darken } from 'polished'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { media } from '../../../styles'
import NavLogo from './NavLogo'
import NavDrawer from './NavDrawer'

const NavHeader = styled.header`
  position: absolute;
  z-index: 10;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  color: #fff;

  ${media.small`
    display: none;
  `};
`

const MenuButton = styled.button`
  padding: 12px;
  margin: -8px;
  color: #fff;
  transition: all 0.3s;

  &:hover,
  &:active {
    color: ${darken(0.4, '#fff')};
  }
`

class MobileNav extends Component {
  state = {
    drawerOpen: false
  }

  toggleDrawer = () => {
    this.setState(prevState => ({
      drawerOpen: !prevState.drawerOpen
    }))
  }

  render() {
    return (
      <Fragment>
        <NavHeader>
          <NavLogo />
          <MenuButton onClick={this.toggleDrawer}>
            <FontAwesomeIcon icon={faBars} size="lg" style={{ marginBottom: '4px' }} />
          </MenuButton>
        </NavHeader>
        <NavDrawer open={this.state.drawerOpen} onClose={this.toggleDrawer} />
      </Fragment>
    )
  }
}

export default MobileNav
