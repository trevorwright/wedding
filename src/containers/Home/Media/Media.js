import React from 'react'
import styled from 'styled-components'
import { media } from '../../../styles'

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
      <MediaItem />
      <MediaItem />
    </Content>
  </Section>
)

export default Media
