import React from 'react'
import styled, { css } from 'styled-components'

const Container = styled.button`
  padding: 16px;
  transition: all 0.3s;
  border: 1px solid transparent;

  > *:not(:last-child) {
    margin-bottom: 16px;
  }

  ${props =>
    !props.comingSoon &&
    css`
      cursor: pointer;

      &:hover {
        border: 1px solid #dbdbdb;
        border-radius: 5px;
        box-shadow: 6px 6px 15px -6px rgba(0, 0, 0, 0.75);
      }
    `};
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

const MediaItem = ({ title, image, comingSoon }) => (
  <Container comingSoon={comingSoon}>
    <ImageContainer comingSoon={comingSoon}>
      {comingSoon && <ComingSoon>Coming soon...</ComingSoon>}
      <Image src={image} />
    </ImageContainer>
    <Title>{title}</Title>
  </Container>
)

export default MediaItem
