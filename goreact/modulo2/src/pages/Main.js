import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import Logo from '../assets/img/logo.png';

import api from '../services/api';

import CompareList from '../components/CompareList';

class Main extends React.Component {
  state = {
    loading: false,
    repositoryInput: '',
    repositoryError: false,
    repositories: [],
  }

  handleAddRepository = async (e) => {
    e.preventDefault();
    const { repositoryInput, repositories } = this.state;

    this.setState({ loading: true });

    try {
      const { data: repository } = await api.get(`/repos/${repositoryInput}`);

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({
        repositoryInput: '',
        repositoryError: false,
        repositories: [...repositories, repository],
      });
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const {
      repositories, repositoryInput, repositoryError, loading,
    } = this.state;

    return (
      <Container>
        <img src={Logo} alt="Github Compare" />

        <Form
          withError={repositoryError}
          onSubmit={this.handleAddRepository}
        >
          <input
            type="text"
            placeholder="usuario/formulario"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />

          <button type="submit">{
            loading
              ? <i className="fa fa-spinner fa-pulse" />
              : 'OK'
          }
          </button>
        </Form>

        <CompareList repositories={repositories} />
      </Container>
    );
  }
}

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
    border: ${props => (props.withError ? '2px solid #F88' : 0)};
    border-radius: 3px;

    font-size: 18px;
    color: #444;
    background: #FFF;
  }

  button {
    width: 80px;
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
