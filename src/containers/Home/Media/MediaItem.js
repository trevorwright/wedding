import React from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div``

const Image = styled.img`
  height: 100%;
  width: 100%;
`

const Title = styled.h3`
  font-size: 22px;
`

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0 auto 16px auto;

  height: 225px;
  width: 350px;
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
  transform: translateY(-50%) translateX(-50%);
`

const MediaItem = ({ title, image, onLinkClicked, linkText, comingSoon }) => (
  <Container>
    <ImageContainer comingSoon={comingSoon}>
      {comingSoon && <ComingSoon>Coming soon...</ComingSoon>}
      <Image src={image} />
    </ImageContainer>
    <Title>{title}</Title>
    <button onClick={onLinkClicked}>{linkText}</button>
  </Container>
)

export default MediaItem
