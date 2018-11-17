import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  background: #d2d2cc;
  padding: 16px 32px 12px 32px;
`

const Link = styled.a`
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

const Footer = () => (
  <Container>
    <Link href="trevorwright.ca">Designed & Developed by Trevor Wright</Link>
  </Container>
)

export default Footer
