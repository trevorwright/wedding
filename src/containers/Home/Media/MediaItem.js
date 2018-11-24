import React from 'react'
import styled, { css } from 'styled-components'
import { Button } from '../../../components'

const Container = styled.div`
  padding: 16px;

  > *:not(:last-child) {
    margin-bottom: 16px;
  }
`

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

const Title = styled.h3`
  font-size: 22px;
`

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0 auto;

  height: 225px;
  max-width: 350px;
  border-radius: 5px;
  box-shadow: 6px 6px 15px -6px rgba(0, 0, 0, 0.75);

  ${props =>
    props.comingSoon &&
    css`
      background: grey;

      img {
        opacity: 0.3;
      }
    `};
`

const ComingSoon = styled.h4`
  position: absolute;
  color: white;
  font-size: 24px;
  z-index: 20;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translateY(-50%) translateX(-50%);
`

const MediaItem = ({ title, image, comingSoon, children }) => (
  <Container>
    <ImageContainer comingSoon={comingSoon}>
      {comingSoon && <ComingSoon>Coming soon...</ComingSoon>}
      <Image src={image} />
    </ImageContainer>
    <Title>{title}</Title>
    {children}
  </Container>
)

export default MediaItem
