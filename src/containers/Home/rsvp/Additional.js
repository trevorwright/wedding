import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Label from './Label'
import Input from './Input'
import TextArea from './TextArea'
import { RadioLabel, RadioInput } from './Radio'
import ErrorIcon from './ErrorIcon'
import { media } from '../../../styles'

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  grid-column: 1 / span 2;

  > h3 {
    grid-column: 1 / span 2;
  }
`

const EmailLabel = styled(Label)`
  grid-column: 1 / span 2;

  ${media.small`
    grid-column: initial;
  `};
`

const HotelRadioGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: left;
  grid-column: 1 / span 2;

  > *:first-child {
    grid-column: 1 / span 3;
  }

  ${media.small`
    grid-column: initial;
  `};
`

const CommentLabel = styled(Label)`
  grid-column: 1 / span 2;
`

const Additional = ({
  email,
  onEmailChanged,
  booked,
  onBookedChanged,
  comments,
  onCommentsChanged,
  emailError,
  bookedError
}) => (
  <Layout>
    <Header>Additional Information</Header>
    <EmailLabel>
      <div>
        {emailError && <ErrorIcon />}
        Email Address
      </div>
      <Input value={email} onChange={onEmailChanged} name="email" />
    </EmailLabel>
    <HotelRadioGroup>
      <Label>
        <div>
          {bookedError && <ErrorIcon />}
          Holiday Inn Reservation
        </div>
      </Label>
      <RadioLabel>
        <RadioInput
          name="bookedHotel"
          value="Yes"
          onChange={onBookedChanged}
          checked={booked === 'Yes'}
        />
        Yes
      </RadioLabel>
      <RadioLabel>
        <RadioInput
          name="bookedHotel"
          value="No"
          onChange={onBookedChanged}
          checked={booked === 'No'}
        />
        No
      </RadioLabel>
    </HotelRadioGroup>
    <CommentLabel>
      Additional comments
      <TextArea name="comments" value={comments} onChange={onCommentsChanged} />
    </CommentLabel>
  </Layout>
)

export default Additional
