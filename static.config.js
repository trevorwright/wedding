import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'

export default {
  getSiteData: () => ({
    title: 'Wright Together 2018'
  }),
  getRoutes: async () => [
    {
      path: '/',
      component: 'src/containers/Home/Home'
    },
    {
      path: '/engagement-gallery',
      component: 'src/containers/EngagementPhotos/EngagementPhotos'
    },
    {
      is404: true,
      component: 'src/containers/404'
    }
  ],
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()
    return html
  },
  Document: class CustomHtml extends Component {
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1 maximum-scale=1.0, user-scalable=no"
            />
            <link
              href="https://fonts.googleapis.com/css?family=Josefin+Sans:100,300,400,600,700"
              rel="stylesheet"
            />
            <title>Wright Together 2019</title>
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  }
}
