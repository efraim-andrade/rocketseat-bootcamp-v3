import React from 'react';
import PropTypes from 'prop-types';

import { Container, Info, Actions } from './style';

const User = ({ avatar, name, user }) => (
  <Container>
    <Info>
      <img
        src={avatar}
        alt="avatar"
      />

      <p>
        {name}
        <span>{user}</span>
      </p>
    </Info>

    <Actions>
      <button className="close fa fa-times" />

      <button className="search fa fa-angle-right" />
    </Actions>
  </Container>
);

User.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};

export default User;
