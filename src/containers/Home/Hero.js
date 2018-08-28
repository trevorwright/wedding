import React from 'react'
import styled from 'styled-components'
import Confetti from 'react-confetti'

import { media } from '../../styles'

import heroImage from '../../../assets/hero.jpg'

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  color: #fff;

  height: 100vh;
  width: 100%;
  max-height: 1300px;
  background: url(${heroImage});
  background-size: cover;
  background-position: 40%;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #000;
    opacity: 0.6;
  }
`

const HeroContent = styled.div`
  z-index: 2;
  text-align: center;
  font-family: 'Josefin Sans', sans-serif;
`

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
  <HeroContainer>
    <Confetti width={1920} height={1080} opacity={0.5} recycle={false} />
    <HeroContent>
      <Names>Katelyn & Trevor</Names>
      <Message>are getting married!</Message>
    </HeroContent>
  </HeroContainer>
)

export default Hero
