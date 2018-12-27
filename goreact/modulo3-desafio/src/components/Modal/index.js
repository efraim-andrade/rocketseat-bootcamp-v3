import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    addUsersRequest: PropTypes.func.isRequired,
    users: PropTypes.shape({
      error: PropTypes.oneOfType([null, PropTypes.string]),
    }).isRequired,
  }

  state = {
    userInput: '',
  }

  handleAddUser = async (e) => {
    e.preventDefault();

    if (this.state.userInput === '') {
      alert('Insira um nome');
    } else {
      await this.props.addUsersRequest(
        this.state.userInput,
        this.props.latitude,
        this.props.longitude,
      );

      setTimeout(() => { this.triggerToast(); }, 1000);
      this.props.closeModal();
    }
  }

  triggerToast = () => {
    const { error } = this.props.users;

    if (error !== null) {
      return !toast.isActive() && toast.error(error);
    }

    return !toast.isActive() && toast.success('Adicionado com sucesso');
  }

  render() {
    const {
      show, closeModal,
    } = this.props;

    return (
      <React.Fragment>
        <ToastContainer />

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
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators(UsersActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Modal);
