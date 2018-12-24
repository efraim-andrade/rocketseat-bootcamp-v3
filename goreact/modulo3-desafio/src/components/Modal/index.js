import React from 'react';
import styled from 'styled-components';

const Modal = () => (
  <Container>
    <Card>
      <h2>Adicionar novo usuario</h2>

      <form>
        <input type="text" placeholder="Usuario no Github" />

        <div className="actions">
          <button type="button">Cancelar</button>
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

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, .5);
`;

const Card = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  border-radius: 3px;

  background-color: #FFF;

  h2 {
    margin-bottom: 10px;

    color: #333;
    font-size: 14px;
    font-weight: bold;
  }

  form {
    input {
      padding: 10px 12px;
      margin-bottom: 10px;
      border-radius: 3px;
      border: 1px solid #e9e9e9;

      color: #999;
    }

    .actions {
      display: flex;
      justify-content: space-between;

      button {
        padding: 10px 30px;
        border: none;
        border-radius: 3px;

        color: #FFF;
        font-size: 12px;
        font-weight: bold;
        background-color: #E9E9E9;
        cursor: pointer;

        &.-primary { background-color: #be9}
      }
    }
  }
`;

export default Modal;
