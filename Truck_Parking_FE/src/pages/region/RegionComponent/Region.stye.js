import styled from 'styled-components';
import colors from '../../../GlobalColors';

export const RegionStyle = styled.div`
  header{
    display: inline-block;
    width: 100%;

    h1 {
      text-align: center;
      margin: 1.5rem 0;
    }

    p {
      font-size: 0.8rem;
    }

    button {
      padding: 0.3rem 0.6rem;
      float: right;
      margin-right: 0.4rem;
      color: ${colors.armyUniform};
      background-color: ${colors.cantaloupe};
      border-radius: 0.3rem;
    }
    @media screen and (min-width: 780px) {
      button {
        margin-right: 10.5%;
      }
    }
  }
`