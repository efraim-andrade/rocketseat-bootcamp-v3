import React from 'react';
import { render } from 'react-dom';

import Home from './screens/Home';

import './styles/main.scss';

class App extends React.Component {
  state = {}

  render() {
    return <Home />;
  }
}

render(<App />, document.getElementById('app'));
