import React, { Fragment } from 'react'
import DesktopNav from './DesktopNav/DesktopNav'
import MobileNav from './MobileNav/MobileNav'

const Nav = ({ items }) => (
  <Fragment>
    <DesktopNav items={items} />
    <MobileNav items={items} />
  </Fragment>
)

export default Nav
