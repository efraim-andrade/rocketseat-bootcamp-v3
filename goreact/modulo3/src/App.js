import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './config/reactotron';
import store from './store';

import TodoList from './TodoList';

console.tron.log('teste');

class App extends Component {
  state= {}

  render() {
    return (
      <Provider store={store}>
        <TodoList />
      </Provider>
    );
  }
}

export default App;
