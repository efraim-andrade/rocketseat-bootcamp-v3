import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Header from './Header';

const Post = ({
  avatar, name, text, time,
}) => (
  <Container>
    <Header avatar={avatar} name={name} time={time} />

    <Text>{ text }</Text>
  </Container>
);

Post.defaultProps = {
  avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNYjU6pmBARJ191GCVK0UncdRoj_zVSJ4ZjLkRuSoDICKTfWxA',
};

Post.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 55vw;
  padding: 20px;
  border-radius: 6px;
  margin: 25px auto 0;
  box-shadow: 0 0 10px #e9e9e9;

  background-color: #e9e9e9;
`;

const Text = styled.p`
  margin-top: 15px;

  color: #444;
  line-height: 1.5;
  text-align: left;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
`;

export default Post;
