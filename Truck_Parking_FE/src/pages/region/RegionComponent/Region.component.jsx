import React from 'react';
import ParkingSpot from '../../../components/parking_spot/parkingSpot.component';

const Region = ({ match }) => {
  console.log(match)
  return(
    <div>
      <header>
        <h1>Find your parking spot</h1>
        <button>Add New Parking Spot</button>
      </header>
      <ParkingSpot />
    </div>
  )
}

export default Region;