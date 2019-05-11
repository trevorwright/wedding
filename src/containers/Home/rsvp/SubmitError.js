import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  font-size: 18px;
  margin: 20px 0;

  > *:not(:last-child) {
    margin-bottom: 16px;
  }
`

const SubmitError = () => (
  <Container>
    <div>
      A error occurred attempting to submit your RSVP. Please try again or e-mail us directly at{' '}
      <a href="rsvp@wrighttogether.ca">rsvp@wrighttogether.ca</a>
    </div>
  </Container>
)

export default SubmitError
