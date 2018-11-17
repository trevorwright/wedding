import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  > *:not(:last-child) {
    margin-bottom: 8px;
  }
`

const Title = styled.h2`
  font-size: 24px;
`

const Image = styled.img`
  height: 225px;
  max-width: 350px;
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
  box-shadow: 6px 6px 15px -6px rgba(0, 0, 0, 0.75);
`
const Details = styled.div``

const Location = ({ title, image, children }) => (
  <Container>
    <Title>{title}</Title>
    <Image src={image} />
    <Details>{children}</Details>
  </Container>
)

export default Location
