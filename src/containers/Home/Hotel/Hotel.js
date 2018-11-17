import React from 'react'
import styled from 'styled-components'
import { media } from '../../../styles'
import { Section, Hero, ImageDetails } from '../../../components'

import hotelImage from '../../../../assets/hotel.jpg'
import hotelRoomImage from '../../../../assets/hotel-room.jpg'

const HOTEL_DIRECTIONS = `https://www.google.ca/maps/place/327+Ontario+St,+St.+Catharines,+ON+L2R+5L3/@43.1698088,-79.2676635,17z/data=!3m1!4b1!4m5!3m4!1s0x89d351a06522a177:0x8d699fddce534830!8m2!3d43.1698088!4d-79.2654748`

const HotelLayout = styled.div`
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

const Details = styled.div`
  > *:not(:last-child) {
    margin-bottom: 8px;
  }
`

const Bold = styled.span`
  font-weight: 500;
`

const Hotel = () => (
  <div name="hotel">
    <Hero image={hotelImage}>Accommodations & Transportation</Hero>
    <Section>
      <HotelLayout>
        <ImageDetails title="Hotel" image={hotelRoomImage}>
          <p>Holiday Inn & Suites</p>
          <p>327 Ontario Street, St. Catharines</p>
          <p>1 (877) 660-8550</p>
        </ImageDetails>
        <Details>
          <p>
            All guests who book a room at The Holiday Inn St. Catharines will be offered a free
            shuttle to and from the venue. We recommend booking as soon as possible as{' '}
            <Bold>space is limited</Bold>. We also suggest requesting early check-in when you call.
          </p>
          <a href={HOTEL_DIRECTIONS}>Directions to hotel</a>
        </Details>
      </HotelLayout>
    </Section>
  </div>
)

export default Hotel
