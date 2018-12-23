import React from 'react';
import styled from 'styled-components';

import User from './User';

const Menu = () => (
  <Container>
    <User />
    <User />
    <User />
    <User />
  </Container>
);


const Container = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 2;

  width: 300px;
  height: 95vh;
  padding: 14px;
  border-radius: 3px;
  box-shadow: 0 0 10px #CCC;

  background-color: #FFF;
  `;

export default Menu;
