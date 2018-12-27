import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserCreators } from '../../../store/ducks/users';

import { Container, Info, Actions } from './style';

class User extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    removeUser: PropTypes.func.isRequired,
  }

  state = {}

  removeUser = (userID) => {
    this.props.removeUser(userID);
  }

  render() {
    const {
      id, avatar, name, user,
    } = this.props;

    return (
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
          <button
            className="close fa fa-times"
            onClick={() => this.removeUser(id)}
          />

          <button className="search fa fa-angle-right" />
        </Actions>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(User);
