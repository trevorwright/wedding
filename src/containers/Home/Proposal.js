import React, { Fragment } from 'react'
import styled from 'styled-components'
import { media } from '../../styles'

import proposalImage from '../../../assets/proposal.png'

const Container = styled.section`
  position: relative;

  color: white;
  min-height: 400px;

  background-image: url(${proposalImage});
  background-size: cover;
  background-position: center;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.3;
    background: #363636;
  }
`

const Message = styled.h4`
  position: absolute;
  width: 100%;
  padding-top: 300px;

  font-size: 28px;
  font-weight: 200;
  text-transform: uppercase;
  color: #fff;
  text-align: center;

  ${media.medium`
    font-size: 40px;
  `};
`

const Proposal = () => (
  <Fragment>
    <Container>
      <Message>Forever starts here</Message>
    </Container>
  </Fragment>
)

export default Proposal
