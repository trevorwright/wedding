import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  font-size: 18px;
  margin: 20px 0;

  > *:not(:last-child) {
    margin-bottom: 16px;
  }
`

const SubmissionComplete = () => (
    <Container>
      <div>Thank you for your response.</div>
      <div>
        Feel free to reach out at <a href="mailto:rsvp@wrighttogether.ca">rsvp@wrighttogether.ca</a>
      </div>
    </Container>
  )

export default SubmissionComplete
