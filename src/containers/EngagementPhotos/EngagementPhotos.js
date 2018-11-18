import React from 'react'
import { NavigationBar, ImageGallery, Hero } from '../../components'
import navItems from './nav-items'

import photographyImage from '../../../assets/photography.jpg'

const EngagementPhotos = () => (
  <main>
    <NavigationBar items={navItems} />
    <Hero image={photographyImage}>Engagement Photos</Hero>
    <ImageGallery />
  </main>
)

export default EngagementPhotos
