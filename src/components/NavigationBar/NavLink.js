import React from 'react'
import * as Scroll from 'react-scroll'
import { Link } from 'react-static'

const NavLink = ({ destination, children, ...rest }) => {
  if (destination.startsWith('#')) {
    return (
      <Scroll.Link to={destination.substring(1)} offset={-60} smooth duration={500} {...rest}>
        {children}
      </Scroll.Link>
    )
  }

  return <Link to={destination}>{children}</Link>
}

export default NavLink
