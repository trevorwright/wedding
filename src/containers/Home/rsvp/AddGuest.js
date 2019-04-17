import React from 'react'
import styled from 'styled-components'
import { media } from '../../../styles'

const AddButton = styled.button`
  border-radius: 8px;
  border: 2px dotted #999999;
  cursor: pointer;
  grid-column: 1 / span 2;
  min-height: 100px;

  &:hover {
    background: #f7f7f7;
  }

  i {
    margin-right: 8px;
    color: #999999;
  }

  ${media.medium`
    grid-column: initial;
  `};
`

const AddGuest = ({ onClick }) => (
  <AddButton onClick={onClick}>
    <i className="fas fa-user-plus" />
    Add second guest
  </AddButton>
)

export default AddGuest
