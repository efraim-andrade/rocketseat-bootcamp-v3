import React from 'react';
import { render } from 'react-dom';

import Home from './screens/Home';

import './styles/main.scss';

const App = () => <Home />;

render(<App />, document.getElementById('app'));
