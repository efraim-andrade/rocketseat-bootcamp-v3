import React, { Component } from 'react';

import Main from './pages/main';

import GlobalStyle from './styles/global';

class App extends Component {
  state = {}

  render() {
    return (
      <React.Fragment>
        <GlobalStyle />

        <Main />
      </React.Fragment>
    );
  }
}

export default App;
