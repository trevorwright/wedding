import React from 'react'
import styled from 'styled-components'
import { media } from '../styles'
import { SectionTitle } from '../components'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  text-align: center;
  font-weight: 300;

  box-shadow: inset 0px 5px 10px -1px rgba(0, 0, 0, 0.3);

  ${media.medium`
    padding: 80px 40px;
  `};
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
  font-size: 16px;

  ${media.medium`
    flex-direction: row;
    align-items: flex-start;
  `};
`

const Section = ({ children, title }) => (
    <Container>
      {title && <SectionTitle>{title}</SectionTitle>}
      <ContentContainer>{children}</ContentContainer>
    </Container>
  )

export default Section
