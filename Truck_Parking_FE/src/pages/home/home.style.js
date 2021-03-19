import styled from 'styled-components';
import colors from '../../GlobalColors';

export const HomeStyle = styled.div`
  margin: 1rem;
  text-align: center;

  h1 {
    margin: 2rem 0;
  }

  .region-list {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-gap: 0.5rem;

    @media screen and (min-width: 780px) {
      grid-template-columns: repeat(4, auto);
      margin: 2rem 4rem;
      grid-gap: 1rem;
    }

    .region-list__item {
      border: 3px solid white;
      height: 3rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 1.2rem;
      border-radius: 0.5rem;
      background-color: ${colors.vanillaMint};
      color: ${colors.armyUniform};
      box-shadow: 0px 0px 3px 2px ${colors.armyUniform};
    }
  }
`