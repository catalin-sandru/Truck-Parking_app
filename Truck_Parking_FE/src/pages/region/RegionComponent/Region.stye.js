import styled from 'styled-components';
import colors from '../../../GlobalColors';

export const RegionStyle = styled.div`
  header{
    h1 {
      text-align: center;
      margin: 1.5rem 0;
    }

    p {
      font-size: 0.8rem;
    }

    button{
      padding: 0.5rem 1rem;
      font-size: 1.2rem;
      margin-left: 0.4rem;
      color: ${colors.armyUniform};
      background-color: ${colors.cantaloupe};
      border-radius: 0.3rem;
    }
  }
`