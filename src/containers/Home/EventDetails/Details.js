import React from 'react'
import styled from 'styled-components'

const DIRECTIONS_LINK = `https://www.google.ca/maps/place/Kurtz+Orchards+Niagara+on+the+Lake/@43.2351836,-79.0643109,17z/data=!4m12!1m6!3m5!1s0x89d35f9e5516d261:0xd726ffe19be6da2a!2sKurtz+Orchards+Niagara+on+the+Lake!8m2!3d43.2351797!4d-79.0621222!3m4!1s0x89d35f9e5516d261:0xd726ffe19be6da2a!8m2!3d43.2351797!4d-79.0621222`

const Container = styled.div`
  > *:not(:last-child) {
    margin-bottom: 16px;
  }
`

const Directions = styled.a``

const NoBreak = styled.span`
  white-space: nowrap;
`

const Details = () => (
  <Container>
    <p>
      Our ceremony and cocktail hour will be held at Gracewood Estates, Kurtz Orchards. Dinner and
      dancing will follow at Kurtz Orchards Market. Transportation from cocktail hour to the
      <NoBreak>reception will be provided.</NoBreak>
    </p>
    <p>
      We can't wait to celebrate and dance the <NoBreak>night away with you!</NoBreak>
    </p>
    <Directions href={DIRECTIONS_LINK} target="_blank">
      Directions to Kurtz Orchards
    </Directions>
  </Container>
)

export default Details
