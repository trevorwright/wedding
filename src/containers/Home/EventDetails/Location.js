import React from 'react'
import styled, { css } from 'styled-components'
import { ImageDetails } from '../../../components'
import kurtzImage from '../../../../assets/kurtz-orchard.jpg'

const Detail = styled.h4`
  ${props =>
    props.bold &&
    css`
      font-weight: 500;
    `};
`

const Location = () => (
  <ImageDetails title="Kurtz Orchards" image={kurtzImage}>
    <Detail bold>August 9th, 2019</Detail>
    <Detail>Ceremony - 2:30 PM - 3:00 PM</Detail>
    <Detail>Cocktails - 3:00 PM - 5:00 PM</Detail>
    <Detail>Reception - 5:00 PM - 12:00 AM</Detail>
  </ImageDetails>
)

export default Location
