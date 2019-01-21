import React from 'react';
import { Provider } from 'react-redux';

import '~/config/Reactotron';

import store from '~/store';
import Routes from '~/routes';

import Player from '~/components/Player';

const App = () => (
  <Provider store={store}>
    <React.Fragment>
      <Routes />
      <Player />
    </React.Fragment>
  </Provider>
);

export default App;
