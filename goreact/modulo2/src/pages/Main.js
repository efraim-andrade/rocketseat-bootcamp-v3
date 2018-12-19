import React from 'react';
import styled from 'styled-components';

import Logo from '../assets/img/logo.png';

const Main = () => (
  <Container>
    <img src={Logo} alt="Github Compare" />

    <Form>
      <input
        type="text"
        placeholder="usuario/formulario"
      />

      <button type="submit">OK</button>
    </Form>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

const Form = styled.form`
  display: flex;
  margin-top: 20px;
  width: 100%;
  max-width: 400px;

  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    border: 0;
    border-radius: 3px;

    font-size: 18px;
    color: #444;
    background: #FFF;
  }

  button {
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    border: 0;
    border-radius: 3px;

    color: #FFF;
    font-size: 20px;
    font-weight: bold;
    background: #63F5B0;
    transition: .3s;

    &:hover {
      cursor: pointer;
      transition: .3s;
      background-color: #52D89F;
    }
  }
`;

export default Main;
