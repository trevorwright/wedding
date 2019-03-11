import React from 'react'
import styled from 'styled-components'
import { media } from '../../styles'

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background: #d2d2cc;
  padding: 16px 32px 12px 32px;

  ${media.medium`
    justify-content: flex-end;
  `};
`

const Link = styled.a`
  text-align: center;
  font-size: 16px;
  text-decoration: none;
  color: #363636;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    height: 1px;
    width: 100%;
    bottom: 0;
    left: 0;
    background: #363636;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    &:after {
      transform: scaleX(0.8);
    }
  }
`

const NoBreak = styled.span`
  white-space: nowrap;
`

const Footer = () => (
  <Container>
    <Link href="https://trevorwright.dev">
      Designed & Developed by <NoBreak>Trevor Wright</NoBreak>
    </Link>
  </Container>
)

export default Footer
