import React from 'react';
import ReactDOM from 'react-dom';

// Your top level component
import App from './App';

// Imports to force hot module reloading to work
import './containers/Home';

// Render your app
if (typeof document !== 'undefined') {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render;
  const render = Comp => {
    renderMethod(<Comp />, document.getElementById('root'));
  };

  // Render!
  render(App);
}

export default App;
