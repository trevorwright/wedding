import React from 'react';
import { Router } from 'react-static';
import { injectGlobal, ThemeProvider } from 'styled-components';
// eslint-disable-next-line
import { hot } from 'react-hot-loader';
import Routes from 'react-static-routes';

import globalCss from './styles/globalCss';

injectGlobal`
  ${globalCss};
`;

const App = () => (
  <Router>
    <ThemeProvider theme={{}}>
      <Routes />
    </ThemeProvider>
  </Router>
);

export default hot(module)(App);
