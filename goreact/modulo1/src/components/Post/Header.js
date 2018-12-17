import React from 'react';
import styled from 'styled-components';

const Post = () => (
  <Container>
    <Avatar src="https://i.imgur.com/IwDMTYd.jpg" />

    <Wrap>
      <Text>Suicide Girl</Text>

      <Time>3 min</Time>
    </Wrap>
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #CCC;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;

  object-fit: cover;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;

  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
`;

const Text = styled.h1`
  margin-bottom: 4px;

  color: #666;
  font-size: 14px;
`;

const Time = styled.time`
  color: #999;
  font-size: 10px;
`;

export default Post;
