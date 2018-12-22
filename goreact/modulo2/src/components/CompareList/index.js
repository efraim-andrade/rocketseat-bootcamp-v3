import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import PropTypes from 'prop-types';

import api from '../../services/api';

class CompareList extends React.Component {
  state = {
    sync: false,
  }

  handleUpdateRepository = async (repo, repos) => {
    this.setState({ sync: true });

    try {
      const { data: repository } = await api.get(`/repos/${repo.owner.login}/${repo.name}`);

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      const updatedRepos = await repos
        .filter(item => item.id !== repo.id);

      updatedRepos.push(repository);

      this.props.updateRepos(updatedRepos);
    } catch (error) {
      console.log('error: ', error);
    } finally {
      this.setState({ sync: false });
    }
  }

  render() {
    const { repositories, removeRepo } = this.props;

    return (
      <Container>
        {
        repositories.map(repository => (
          <Repository key={repository.id}>
            <Close
              className="fa fa-times"
              onClick={() => removeRepo(repository.id)}
            />

            <header>
              <img src={repository.owner.avatar_url} alt="Avatar" />

              <strong>{repository.name}</strong>

              <small>{repository.owner.login}</small>

              <button
                type="button"
                onClick={() => this.handleUpdateRepository(repository, repositories)}
                className={
                  this.state.sync ? 'fa fa-refresh fa-spin' : 'fa fa-refresh'
                }
              />
            </header>

            <ul>
              <li>
                {repository.stargazers_count} <small>stars</small>
              </li>

              <li>
                {repository.forks_count}  <small>forks</small>
              </li>

              <li>
                {repository.open_issues_count}  <small>issues</small>
              </li>

              <li>
                {repository.lastCommit}  <small>last commit</small>
              </li>
            </ul>
          </Repository>
        ))
        }
      </Container>
    );
  }
}

CompareList.propTypes = {
  repositories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    owner: PropTypes.shape({
      login: PropTypes.string,
      avatar_url: PropTypes.string,
    }),
    stargazers_count: PropTypes.number,
    forks_count: PropTypes.number,
    open_issues_count: PropTypes.number,
    lastCommit: PropTypes.string,
  })).isRequired,
  removeRepo: PropTypes.func.isRequired,
  updateRepos: PropTypes.func.isRequired,
};

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    margin-top: 50px;
    `;

const Repository = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 250px;
    margin: 20px;

    border-radius: 3px;

    background: #FFF;

    &:last-child { margin-right: 0; }

    header {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 30px;

      img { width: 64px; }

      strong {
        margin-top: 10px;

        font-size: 24px;
      }

      small {
        color: #666;
        font-size: 14px;
      }

      button {
        margin-top: 5px;
        border: none;

        color: #9b65e6;
        transition: .3s;
        cursor: pointer;
        background: transparent;

        &:hover {
          color: #aa95e6;
          transition: .3s;
        }
      }
    }

    ul {
      list-style: none;

      li {
        padding: 12px 20px;

        font-weight: bold;

        small {
          color: #999;
          font-size: 12px;
          font-style: italic;
          font-weight: normal;
        }

        &:nth-child(2n - 1) { background: #f5f5f5; }
      }
    }

    `;

const Close = styled.a`
    position: absolute;
    right: 10px;
    top: 10px;

    color: #9b65e6;
    cursor: pointer;
    transition: .3s;

    &:hover {
      color: #aa95e6;
      transition: .3s;
    }
    `;

export default CompareList;
