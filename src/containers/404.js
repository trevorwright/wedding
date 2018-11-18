import React from 'react'
import styled from 'styled-components'
import sleepingImage from '../../assets/sleeping.jpg'

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #e1f5fe;

  > *:not(:last-child) {
    margin-bottom: 40px;
  }
`

const ErrorMessage = styled.h1`
  font-size: 48px;
`

const Image = styled.img`
  height: 60vh;
  border-radius: 5px;
  box-shadow: 6px 6px 15px -6px rgba(0, 0, 0, 0.75);
`

export default () => (
  <Container>
    <ErrorMessage>We couldn't find that page :(</ErrorMessage>
    <Image src={sleepingImage} alt="Kate KO'd" />
  </Container>
)
