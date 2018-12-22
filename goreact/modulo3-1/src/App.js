import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './config/reactotron';
import store from './store';
import Routes from './routes';

console.tron.log('teste');

class App extends Component {
  state= {}

  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
