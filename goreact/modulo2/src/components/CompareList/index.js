import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

const CompareList = ({ repositories }) => (
  <Container>
    {
    repositories.map(repository => (
      <Repository key={repository.id}>
        <header>
          <img src={repository.owner.avatar_url} alt="Avatar" />

          <strong>{repository.name}</strong>
          <small>{repository.owner.login}</small>
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
};

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    margin-top: 50px;
    `;

const Repository = styled.div`
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

export default CompareList;
