import styled from 'styled-components';

export const ModalStyle = styled.div`
  display: ${props => props.isOpen ? "flex" : "none" };
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ccc;

  form {
    display: inline-block;
    margin: auto;
    padding: 1.2rem;
    width: 80%;
    background: #fff;
    position: relative;

    .form__button-close {
      position: absolute;
      right: 1.4rem;
      top: 0.5rem;
      button {
        background: transparent;
        padding: 0.15rem;
        font-size: 1.2rem;
      }
    }

    .form__title,
    .form__coordinates,
    .form__textarea {
      display: flex;
      flex-direction: column;
      margin-bottom: 1.2rem;

      label {
        font-weight: bold;
        margin-bottom: 0.5rem;
      }

      input {
        padding: 0.3rem;
      }
    }

    .form__icons {
      display: grid;
      grid-template-columns: repeat(2, auto);

      label {
        margin: auto;
      }
    }

    .form__button-submit {
      button {
        width: 100%;
        padding: 0.6rem 0;
      }
    }

    input[type="checkbox"] {
      display: none;
    }

    input[type="text"],
    input[type="textarea"] {
      border: 1px solid #000;
    }
  }
`