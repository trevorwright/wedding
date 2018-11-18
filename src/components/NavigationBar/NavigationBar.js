import React, { Fragment } from 'react'
import DesktopNav from './DesktopNav/DesktopNav'
import MobileNav from './MobileNav/MobileNav'

const Nav = () => (
  <Fragment>
    <DesktopNav />
    <MobileNav />
  </Fragment>
)

export default Nav
