import React from 'react'
import styled from 'styled-components'
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

const openEngagementVideo = () => {
  window.open('https://www.youtube.com/watch?v=oAWdhTbytjI', '_blank')
}

const Media = () => (
  <Section name="media">
    <SectionTitle>Media</SectionTitle>
    <Content>
      <MediaItem
        image={engagementVideoImage}
        title="Engagement Video"
        linkText="Watch video"
        onClicked={openEngagementVideo}
      />
      <MediaItem
        comingSoon
        image={engagementPhotosImage}
        title="Engagement Photos"
        linkText="View Gallery"
      />
    </Content>
  </Section>
)

export default Media
