import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container } from './style';

import User from './User';

class Menu extends React.Component {
  static propTypes = {
    users: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired,
      })).isRequired,
    }).isRequired,
  }

  state = {}

  render() {
    return (
      <Container>
        {
        this.props.users.data.map(user => (
          <User
            key={user.id}
            avatar={user.avatar}
            name={user.name}
            user={user.user}
            id={user.id}
          />
        ))
      }
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps)(Menu);
