import styled from 'styled-components';

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

    .region-list__item {
      border: 2px solid #f0f0f0;
    }
  }
`