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
        span {
          font-weight: normal;
          font-size: 0.7rem;
        }
      }
      input {
        padding: 0.3rem;
      }
      input:focus {
        outline: 0;
      }
      input:focus:invalid {
        border: 1px solid red;
      }
      input:focus:valid {
        border: 1px solid green;
      }
    }

    .form__icons {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      label {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 0 auto 0 auto;
      }
      p {
        text-transform: capitalize;
        font-size: 0.6rem;
        text-align: center;
        margin: 0.2rem auto;
        inline-size: min-content;
      }
      img {
        transition: linear 0.3s;
        max-width: 55px;
        border-radius: 0.3rem;
      }
      input:checked + img {
        transform: scale(1.1);
        background-color: #95F389;
      }
    }

    .form__button-submit {
      button {
        width: 100%;
        padding: 0.6rem 0;
      }
    }

    input[type="text"],
    input[type="textarea"] {
      border: 1px solid #000;
    }
  }
`