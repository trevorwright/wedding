import React from 'react'
import styled from 'styled-components'
import Label from './Label'
import Input from './Input'
import TextArea from './TextArea'
import { media } from '../../../styles'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column: 1 / span 2;
  grid-gap: 24px;

  ${media.medium`
    grid-template-columns: 1fr 1fr;

    .comments {
      grid-column: 1 / span 2;
    }
  `};
`

const Decline = ({ name, email, comments, onNameChanged, onEmailChanged, onCommentsChanged }) => (
  <Container>
    <Label>
      Name
      <Input name="nameOne" value={name} onChange={onNameChanged} />
    </Label>
    <Label>
      Email
      <Input name="email" value={email} onChange={onEmailChanged} />
    </Label>
    <Label className="comments">
      Additional comments
      <TextArea name="comments" value={comments} onChange={onCommentsChanged} />
    </Label>
  </Container>
)

export default Decline
