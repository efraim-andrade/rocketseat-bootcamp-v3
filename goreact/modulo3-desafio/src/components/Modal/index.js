import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UsersActions } from '../../store/ducks/users';

import { Container, Card } from './style';

class Modal extends React.Component {
  static propTypes = {
    show: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    latitude: PropTypes.string.isRequired,
    longitude: PropTypes.string.isRequired,
    addUsersRequest: PropTypes.func.isRequired,
  }

  state = {
    userInput: '',
  }

  componentDidMount() {

  }

  handleAddUser = (e) => {
    e.preventDefault();

    this.props.addUsersRequest(
      this.state.userInput,
      this.props.latitude,
      this.props.longitude,
    );

    this.props.closeModal();
  }

  render() {
    const {
      show, closeModal,
    } = this.props;

    return (
      <Container show={show}>
        <Card>
          <h2>Adicionar novo usuario</h2>

          <form onSubmit={this.handleAddUser}>
            <input
              type="text"
              name="user"
              value={this.state.userInput}
              onChange={e => this.setState({ userInput: e.target.value })}
              placeholder="Usuario no Github"
            />

            <div className="actions">
              <button
                type="button"
                onClick={closeModal}
              >Cancelar
              </button>

              <button
                className="-primary"
                type="submit"
              >
                  Salvar
              </button>
            </div>
          </form>
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators(UsersActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Modal);
