import React from 'react'
import styled from 'styled-components'
import { media } from '../../../styles'
import { Hero, Section } from '../../../components'
import eventImage from '../../../../assets/event.jpg'

import Location from './Location'
import Details from './Details'

const DetailsLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.mediumDown`
    > *:not(:first-child) {
      margin-top: 24px;
    }
  `};

  ${media.medium`
    flex-direction: row;

    > *:not(:first-child) {
      margin-left: 24px;
    }
  `};

  ${media.large`
    > *:not(:first-child) {
      margin-left: 44px;
    }
  `};
`

const EventDetails = () => (
  <div name="event">
    <Hero image={eventImage}>Event Details</Hero>
    <Section>
      <DetailsLayout>
        <Location />
        <Details />
      </DetailsLayout>
    </Section>
  </div>
)

export default EventDetails
