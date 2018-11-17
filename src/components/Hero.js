import React from 'react'
import styled from 'styled-components'
import { media } from '../styles'

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  color: #fff;

  height: ${props => props.height || '300px'};
  width: 100%;
  max-height: 1300px;
  background: url(${props => props.image});
  background-size: cover;
  background-position: center;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #000;
    opacity: 0.4;
  }

  ${media.medium`
    height: ${props => props.height || '400px'};
  `};

  ${props => props.css};
`

const HeroContent = styled.div`
  z-index: 2;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 4px;
  width: 100%;
  padding: 0 16px;

  ${media.medium`
    font-size: 24px;
  `};
`

const Hero = ({ children, ...rest }) => (
  <HeroContainer {...rest}>
    <HeroContent>{children}</HeroContent>
  </HeroContainer>
)

export default Hero
