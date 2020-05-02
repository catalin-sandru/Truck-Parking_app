import styled from 'styled-components';

export const ParkingSpotStyle = styled.div`
  .parking__spot {
    border: 1px solid #000;
    margin: 0.2rem 0.4rem;
    padding: 0.5rem;

    .parking__spot-title {
      font-size: 1.1rem;
      border-bottom: 1px solid #ccc;
    }

    .parking__spot-coordinates {
      img {
        width: 13px;
      }
    }

    .parking__spot-icons {
      margin: 0.3rem 0;
      img {
        width: 40px;
      }
    }
    .parking__spot-info {
      border-top: 1px solid #ccc;
    }
  }
`