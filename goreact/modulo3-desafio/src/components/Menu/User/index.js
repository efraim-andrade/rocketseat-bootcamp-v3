import React from 'react';
import styled from 'styled-components';

const User = () => (
  <Container>
    <Info>
      <img
        src="https://avatars1.githubusercontent.com/u/28229600?s=460&v=4"
        alt="avatar"
      />

      <p>
  Efraim Andrade
        <span>efraim-andrade</span>
      </p>
    </Info>

    <Actions>
      <button className="close fa fa-times" />

      <button className="search fa fa-angle-right" />
    </Actions>
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 0;
  border-bottom: 1px solid #F5F5F5;

  &:first-of-type { padding-top: 0; }
  `;

const Info = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
  }

  p {
    display: inline-grid;
    margin-left: 10px;

    font-size: 14px;
    font-weight: bold;
    color: #333;

    span {
      margin-top: 3px;

      color: #888;
      font-size: 12px;
      font-weight: normal;
    }
  }
  `;

const Actions = styled.div`
  display: flex;
  align-items: center;

  button {
    border: none;

    font-size: 12px;
    cursor: pointer;
  }

  .close {
    width: 16px;
    height: 16px;
    border-radius: 100%;
    margin-right: 20px;

    font-size: 12px;
    color: #FFF;
    background: #F55;

    &:before { margin-left: 1px; }
  }

  .search {
    color: #999;
    font-size: 18px;
    background: transparent;
  }
  `;

export default User;
