import React from 'react'
import { Router } from 'react-static'
import { injectGlobal, ThemeProvider } from 'styled-components'
// eslint-disable-next-line
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'

import 'react-image-lightbox/style.css'
import globalCss from './styles/globalCss'
import colors from './styles/colors'

injectGlobal`
  ${globalCss};
`

const App = () => (
  <Router>
    <ThemeProvider theme={colors}>
      <Routes />
    </ThemeProvider>
  </Router>
)

export default hot(module)(App)
