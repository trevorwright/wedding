import React from 'react'
import { NavigationBar } from '../../components'
import Hero from './Hero'
import Rsvp from './rsvp'
import Story from './Story'
import Countdown from './Countdown'
import Media from './Media'
import EventDetails from './EventDetails'
import Footer from './Footer'

import navItems from './nav-items'

export default () => (
  <div>
    <NavigationBar items={navItems} />
    <Hero />
    <Rsvp />
    <Story />
    <Countdown />
    <Media />
    <EventDetails />
    <Footer />
  </div>
)
