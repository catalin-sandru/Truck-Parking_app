import styled from 'styled-components';
import colors from '../../GlobalColors';

export const FormStyle = styled.div`
  margin-top: 2rem;

  div {
    display: flex;
    justify-content: space-between;
    margin: 1rem 2rem;

    label {
      color: ${colors.armyUniform};
    }

    input {
      width: 55%;
    }
  }

  .form__submit {
    justify-content: center;
    button {
      width: 40%;
      padding: 0.5rem 1rem;
      font-size: 1.2rem;
      color: ${colors.armyUniform};
      background-color: ${colors.cantaloupe};
      border-radius: 0.3rem;
    }
  }
`