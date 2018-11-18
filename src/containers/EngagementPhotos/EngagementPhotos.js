import React from 'react'
import { NavigationBar, ImageGallery, Hero } from '../../components'
import navItems from './nav-items'

import photographyImage from '../../../assets/photography.jpg'

import photoIds from './photo-ids'

const EngagementPhotos = () => (
  <main>
    <NavigationBar items={navItems} />
    <Hero image={photographyImage}>Engagement Photos</Hero>
    <ImageGallery path="/engagement-photos" ids={photoIds} />
  </main>
)

export default EngagementPhotos
