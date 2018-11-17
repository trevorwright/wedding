import React from 'react'
import styled, { css } from 'styled-components'

import kurtzImage from '../../../../assets/kurtz-orchard.jpg'

const Container = styled.div`
  > *:not(:last-child) {
    margin-bottom: 8px;
  }
`

const Title = styled.h2`
  font-size: 24px;
`

const Detail = styled.h4`
  ${props =>
    props.bold &&
    css`
      font-weight: 500;
    `};
`

const Image = styled.img`
  width: 350px;
  height: 225px;
  object-fit: cover;
  border-radius: 5px;
  box-shadow: 6px 6px 15px -6px rgba(0, 0, 0, 0.75);
`

const Location = () => (
  <Container>
    <Title>Kurtz Orchards</Title>
    <Image src={kurtzImage} />
    <Detail bold>August 9th, 2019</Detail>
    <Detail>Ceremony - 2:30 PM - 3:30 PM</Detail>
    <Detail>Reception - 3:30 PM - 12:00 AM</Detail>
  </Container>
)

export default Location
