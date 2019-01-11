import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img src="https://avatars0.githubusercontent.com/u/28229600?v=4" alt="avatar"/>

      Efraim Andrade
    </User>
  </Container>
);

export default Header;
