import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Main from './pages/main';

import './config/reactotron';
import store from './store';
import GlobalStyle from './styles/global';

class App extends Component {
  state = {}

  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />

        <Main />
      </Provider>
    );
  }
}

export default App;
