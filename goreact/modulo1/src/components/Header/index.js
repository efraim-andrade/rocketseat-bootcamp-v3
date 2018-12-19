import React from 'react';
import styled from 'styled-components';

const Header = () => (
  <Container>
    <Text>Rocket Book</Text>
  </Container>
);

const Container = styled.div`
  width: 100%;
  height: 40px;

  background-color: #3B5998;
`;

const Text = styled.h1`
  text-align: center;
  line-height: 40px;

  color: #FFF;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
`;

export default Header;
