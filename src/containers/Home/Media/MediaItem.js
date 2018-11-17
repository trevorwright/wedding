import React from 'react'
import styled from 'styled-components'

const Container = styled.div``

const Image = styled.img`
  height: 225px;
  width: 350px;
  border-radius: 5px;
  box-shadow: 6px 6px 15px -6px rgba(0, 0, 0, 0.75);
`

const Title = styled.h3`
  font-size: 22px;
`

const MediaItem = ({ title, image, onLinkClicked, linkText }) => (
  <Container>
    <Image src={image} />
    <Title>{title}</Title>
    <button onClick={onLinkClicked}>{linkText}</button>
  </Container>
)

export default MediaItem
