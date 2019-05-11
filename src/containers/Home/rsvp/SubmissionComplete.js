import React from 'react'
import styled from 'styled-components'
import Cookies from 'js-cookie'

const Container = styled.div`
  font-size: 18px;
  margin: 20px 0;

  > *:not(:last-child) {
    margin-bottom: 16px;
  }
`

const SubmissionComplete = () => {
  const rsvp = Cookies.get('rsvp')

  return (
    <Container>
      {rsvp === 'attending' ? (
        <div>Thank you for your RSVP, we look forward to celebrating this day with you!</div>
      ) : (
        <div>We are sorry you will not be able to attend. You will be missed.</div>
      )}
      <div>
        Feel free to reach out at <a href="rsvp@wrighttogether.ca">rsvp@wrighttogether.ca</a>
      </div>
    </Container>
  )
}

export default SubmissionComplete
