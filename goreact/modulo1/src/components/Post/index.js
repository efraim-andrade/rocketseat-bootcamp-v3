import React from 'react';
import styled from 'styled-components';

import Header from './Header';

const Post = () => (
  <Container>
    <Header />
  </Container>
);

const Container = styled.div`
  display: flex;
  width: 55vw;
  padding: 20px;
  border-radius: 6px;
  margin: 25px auto 0;
  box-shadow: 0 0 10px #e9e9e9;

  background-color: #e9e9e9;
`;

const Text = styled.h1`
  text-align: center;
  line-height: 40px;

  color: #666;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
`;

export default Post;
