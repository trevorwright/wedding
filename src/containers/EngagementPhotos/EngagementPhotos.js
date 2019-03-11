import React from 'react'
import styled from 'styled-components'
import { hoverUnderline, media } from '../../styles'
import { NavigationBar, ImageGallery, Hero } from '../../components'
import navItems from './nav-items'

import photographyImage from '../../../assets/photography.jpg'

import photoIds from './photo-ids'

const PhotoCredits = styled.a`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 10px;
  text-decoration: none;
  color: white;
  margin: 8px;

  ${hoverUnderline('white')};

  ${media.small`
    font-size: 12px;
  `}
`

const EngagementPhotos = () => (
  <main>
    <NavigationBar items={navItems} />
    <Hero image={photographyImage}>
      Engagement Photos
      <PhotoCredits href="google.ca">Katie Stewart Photography</PhotoCredits>
    </Hero>
    <ImageGallery path="/engagement-photos" ids={photoIds} />
  </main>
)

export default EngagementPhotos
