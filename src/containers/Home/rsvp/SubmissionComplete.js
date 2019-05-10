import React from 'react'
import styled from 'styled-components'
import Cookies from 'js-cookie'

const Container = styled.div`
  font-size: 18px;
  margin: 20px 0;
`

const SubmissionComplete = () => {
  const name = Cookies.get('rsvp')

  return (
    <Container>
      <div>Thank you for your RSVP{!!name && ` ${name}`}!</div>
    </Container>
  )
}

export default SubmissionComplete
