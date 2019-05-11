import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import { RadioLabel, RadioInput } from './Radio'
import { media } from '../../../styles'

const Container = styled.div`
  display: grid;
  grid-column: 1 / span 2;
  grid-template-columns: 1fr;

  ${media.medium`
    grid-template-columns: 1fr 1fr;

    ${Header} {
      grid-column: 1 / span 2;
    }
  `}
`

const Attendance = ({ value, onChange }) => (
  <Container>
    <Header>Attendance</Header>
    <RadioLabel>
      <RadioInput name="attending" value="yes" onChange={onChange} checked={value === 'yes'} />
      Accepts with pleasure
    </RadioLabel>
    <RadioLabel>
      <RadioInput name="attending" value="no" onChange={onChange} checked={value === 'no'} />
      Declines with regrets
    </RadioLabel>
  </Container>
)

export default Attendance
