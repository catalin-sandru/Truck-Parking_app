import React, { useState } from 'react';
import { ParkingSpotStyle } from './parkingSpot.style';

const ParkingSpot = () => {

  const [facilities, setFacilities] = useState({
    parking: false,
    shower: false,
    washingMachine: false,
    restaurant: false,
  })

  return(
    <ParkingSpotStyle>
      <h4>Coordinates: </h4>
      <ul>
        <li>Facilities</li>
      </ul>
      <p>Extra information</p>
    </ParkingSpotStyle>
  )
}

export default ParkingSpot;