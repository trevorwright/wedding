import React from 'react'
import styled from 'styled-components'

const Title = styled.h3`
  position: relative;
  font-size: 28px;
  margin-bottom: 32px;

  &:after {
    content: '';
    position: absolute;
    height: 1px;
    background: #363636;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

const SectionTitle = ({ children }) => <Title>{children}</Title>

export default SectionTitle
