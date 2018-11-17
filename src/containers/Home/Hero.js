import React from 'react'
import styled from 'styled-components'

import { media } from '../../styles'

import { Hero as HeroLayout } from '../../components'
import heroLargeImage from '../../../assets/hero/large.jpg'

const Names = styled.h1`
  font-weight: 100;
  font-style: normal;
  font-size: 22px;
  line-height: 50px;
  letter-spacing: 4px;
  text-transform: uppercase;

  ${media.small`
    font-size: 32px;
    letter-spacing: 8px;
  `};

  ${media.medium`
    font-size: 48px;
    letter-spacing: 16px;
  `};

  ${media.large`
    font-size: 68px;
  `};
`

const Message = styled.h4`
  font-size: 18px;
  font-weight: 200;
  text-transform: initial;

  ${media.small`
    font-size: 22px;
  `};

  ${media.medium`
    font-size: 28px;
    font-weight: 300;
  `};

  ${media.large`
    margin-top: 12px;
  `};
`

const Hero = () => (
  <HeroLayout height="100vh" image={heroLargeImage}>
    <Names>Katelyn & Trevor</Names>
    <Message>are getting married!</Message>
  </HeroLayout>
)

export default Hero
