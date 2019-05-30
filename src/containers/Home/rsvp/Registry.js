import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import bedBathLogo from '../../../../assets/bbb-logo.png'

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:not(:last-child) {
    margin-bottom: 12px;
  }
`
const Image = styled.img`
  max-width: 280px;
`

const Message = styled.span`
  max-width: 500px;
`

const Link = styled.a`
  cursor: pointer;
`
const NoBreak = styled.span`
  white-space: nowrap;
`

const registry = () => (
  <Layout>
    <Header>Registry</Header>
    <Message>
      We are fortunate to have a home together and many things we need, but if you wish to buy a
      gift we are registered <NoBreak>at Bed Bath and Beyond</NoBreak>.
    </Message>
    <Link
      href="https://www.bedbathandbeyond.ca/store/giftregistry/viewregistryguest/547511292"
      target="_blank"
    >
      <Image src={bedBathLogo} />
    </Link>
  </Layout>
)

export default registry
