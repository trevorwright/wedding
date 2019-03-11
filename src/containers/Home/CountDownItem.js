import React from 'react'
import styled from 'styled-components'
import { media } from '../../styles'

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40px;
`

const Count = styled.span`
  font-weight: 300;
  font-size: 24px;

  ${media.small`
    font-size: 32px;
  `};
`

const Label = styled.span`
  font-weight: 300;
  font-size: 10px;
  letter-spacing: initial;

  ${media.break(400)`
    font-size: 12px;
  `}

  ${media.small`
    font-size: 18px;
  `};

  ${media.medium`
    font-size: 26px;
  `};
`

const Divider = styled.hr`
  width: 22px;
`

const CountDownItem = ({ children, label }) => (
  <ItemContainer>
    <Count>{children}</Count>
    <Divider />
    <Label>{label}</Label>
  </ItemContainer>
)

export default CountDownItem
