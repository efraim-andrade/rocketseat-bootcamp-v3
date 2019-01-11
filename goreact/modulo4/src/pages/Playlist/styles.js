import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  img {
    width: 220px;
    height: 220px;
  }

  div {
    margin-left: 20px;

    span {
      font-size: 11px;
      letter-spacing: 1.11px;
      font-weight: 300;
    }

    h1 {
      margin-top: 10px;
      font-size: 48px;
    }

    p {
      margin-top: 0;
      color: #B3B3B3;
      font-size: 11px;
      letter-spacing: 1.11px;
      text-transform: uppercase;
    }

    button {
      height: 32px;
      padding: 0 35px;
      margin-top: 10px;
      border: 0;
      border-radius: 16px;

      color: #FFF;
      font-size: 12px;
      line-height: 32px;
      background: #1DB854;
      letter-spacing: 1.11px;
    }
  }
`;

export const SongList = styled.table`
  width: 100%;
  text-align: left;
  margin-top: 20px;

  thead th {
    font-size: 11px;
    color: #B3B3B3;
    letter-spacing: 1.11px;
    font-weight: normal;
    text-transform: uppercase;
    padding: 5px 10px;

    &:last-child { text-align: right; }
  }

  tbody {
    tr {
      &:hover td { background: #282828; }

      td {
        padding: 0 10px;
        border-top: 1px solid #282828;

        font-size: 13px;
        line-height: 40px;

        &:first-child {
          width: 80px;
          text-align: right;
        }

        &:last-child { text-align: right; }
      }
    }
  }
`;
