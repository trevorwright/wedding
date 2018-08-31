import React from 'react'
import styled from 'styled-components'
import { media } from '../../styles'

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40px;
`

const Text = styled.span`
  font-weight: 300;
  font-size: 16px;

  ${media.small`
    font-size: 20px;
  `};

  ${media.medium`
    font-size: 28px;
  `};
`

const Divider = styled.hr`
  width: 22px;
`

const CountDownItem = ({ children, label }) => (
  <ItemContainer>
    <Text>{children}</Text>
    <Divider />
    <Text>{label}</Text>
  </ItemContainer>
)

export default CountDownItem
