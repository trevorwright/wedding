import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-static'
import { media } from '../../../styles'

import engagementVideoImage from '../../../../assets/engagement-video-thumb.jpg'
import engagementPhotosImage from '../../../../assets/engagement-photos-thumb.jpg'
import { SectionTitle } from '../../../components'

import MediaItem from './MediaItem'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  text-align: center;
  font-weight: 300;

  box-shadow: inset 0px 5px 10px -1px rgba(0, 0, 0, 0.3);

  ${media.medium`
    padding: 80px 40px;
  `};
`

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px;
  width: 100%;
  max-width: 900px;

  ${media.medium`
    grid-template-columns: 1fr 1fr;
  `}
`

const Media = () => (
  <Section name="media">
    <SectionTitle>Media</SectionTitle>
    <Content>
      <a
        href="https://www.youtube.com/watch?v=oAWdhTbytjI"
        rel="noopener noreferrer"
        target="_blank"
      >
        <MediaItem image={engagementVideoImage} title="Engagement Video" linkText="Watch video" />
      </a>
      <Link to="/engagement-gallery">
        <MediaItem
          image={engagementPhotosImage}
          title="Engagement Photos"
          linkText="View Gallery"
        />
      </Link>
    </Content>
  </Section>
)

export default Media
