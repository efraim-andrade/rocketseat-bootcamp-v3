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
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  }

  state = {
    userInput: '',
    latitude: this.props.latitude,
    longitude: this.props.longitude,
  }

  handleAddUser = (e) => {
    e.preventDefault();
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

const mapDispatchToProps = dispatch => bindActionCreators(UsersActions, dispatch);


export default connect(mapDispatchToProps)(Modal);
