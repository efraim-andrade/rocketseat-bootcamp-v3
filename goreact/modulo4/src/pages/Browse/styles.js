import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 110px;
`;

export const Title = styled.h1`
  font-size: 48px;
`;

export const List = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const Playlist = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 250px;
  margin-left: 20px;

  cursor: pointer;
  text-decoration: none;

  &:first-child { margin: 0; }

  &:hover img {
    opacity: .4;
    transition: .3s;
  }

  img {
    height: 250px;

    transition: .3s;
  }

  strong {
    margin-top: 10px;

    font-size: 13px;
    color: #FFF;
  }

  p {
    margin-top: 5px;

    color: #B3B3B3;
    font-size: 13px;
    line-height: 22px;
  }
`;
