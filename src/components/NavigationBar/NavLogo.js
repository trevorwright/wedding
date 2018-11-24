import React from 'react'
import styled from 'styled-components'
import { animateScroll } from 'react-scroll'

const InitialsLogo = styled.button`
  font-size: 22px;
  font-weight: 300;
  letter-spacing: 8px;
  color: #fff;
  cursor: pointer;
`

const onLogoClick = () => {
  animateScroll.scrollToTop()
}

const NavLogo = () => <InitialsLogo onClick={onLogoClick}>K & T</InitialsLogo>

export default NavLogo
