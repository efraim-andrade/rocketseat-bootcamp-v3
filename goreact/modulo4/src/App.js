import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import GlobalStyle from './styles/global';
import { Wrapper, Container, Content } from './styles/components';

import './config/reacotron';

import SideBar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';

import Routes from './routes';
import store from './store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Wrapper>
        <GlobalStyle />
        <Container>
          <SideBar />

          <Content>
            <Header />

            <Routes />
          </Content>
        </Container>

        <Player />
      </Wrapper>
    </BrowserRouter>
  </Provider>
);

export default App;
