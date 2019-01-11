import styled from 'styled-components';

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
  width: 200px;

  background: #121212;
  color: #b3b3b3;

  > div { padding: 25px; }
`;

export const Nav = styled.ul`
  list-style: none;
  margin-top: 25px;

  &:first-child { margin-top: 0 }

  li {
    span {
      font-size: 11px;
      text-transform: uppercase;
      line-height: 22px;
      letter-spacing: 1.11px;
      font-weight: 300;
    }

    a {
      color: inherit;
      text-decoration: none;
      font-size: 13px;
      line-height: 32px;
      font-weight: ${props => (props.main ? 'bold' : 'normal')};

      &:hover { color: #FFF; }
    }
  }
`;

export const NewPlaylist = styled.button`
  display: flex;

  border: 0;
  border: 1px solid #282828;
  align-items: center;
  padding: 15px 25px;

  color: #b3b3b3;
  font-size: 13px;
  background: transparent;

  &:hover {
    color: #FFF;
  }

  img {
    margin-right: 10px;
  }
`;
