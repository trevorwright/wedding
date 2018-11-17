import React from 'react'
import styled from 'styled-components'

const DIRECTIONS_LINK = `https://www.google.ca/maps/place/Kurtz+Orchards+Niagara+on+the+Lake/@43.2351836,-79.0643109,17z/data=!4m12!1m6!3m5!1s0x89d35f9e5516d261:0xd726ffe19be6da2a!2sKurtz+Orchards+Niagara+on+the+Lake!8m2!3d43.2351797!4d-79.0621222!3m4!1s0x89d35f9e5516d261:0xd726ffe19be6da2a!8m2!3d43.2351797!4d-79.0621222`

const Container = styled.div`
  > *:not(:last-child) {
    margin-bottom: 16px;
  }
`

const Directions = styled.a``

const Details = () => (
  <Container>
    <p>
      The ceremony will be held at Gracewood Estates, Kurtz Orchards. Cocktail hour will immediately
      follow. A reception will follow at The Market, Kurtz Orchards. Transportation from cocktail
      hour to the reception will be provided.
    </p>
    <p>
      We can't wait to celebrate and dance the <span>night away with you!</span>
    </p>
    <Directions href={DIRECTIONS_LINK} target="_blank">
      Directions to Kurtz Orchards
    </Directions>
  </Container>
)

export default Details
