import styled from 'styled-components';
import colors from '../../GlobalColors';

export const ParkingSpotStyle = styled.div`
@media screen and (min-width: 780px) {
  display: grid;
  grid-template-columns: repeat(2, 50%);
  max-width: 80%;
  margin: auto;
}

.parking__spot {
  border: 1px solid #000;
  margin: 0.5rem;
  padding: 0.5rem;
  &:nth-child(odd) {
    background-color: ${colors.cantaloupe}
  }

    .parking__spot-title {
      font-size: 1.1rem;
      border-bottom: 1px solid ${colors.mintcream};
    }

    .parking__spot-coordinates {
      img {
        width: 15px;
      }
      font-size: 1.2rem;
      font-weight: 400;
    }

    .parking__spot-icons {
      margin: 0.3rem 0;
      img {
        width: 40px;
      }
    }
    .parking__spot-info {
      border-top: 1px solid ${colors.mintcream};
    }
  }
`
