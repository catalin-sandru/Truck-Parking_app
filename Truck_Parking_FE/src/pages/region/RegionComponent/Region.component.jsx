import React from 'react';
import ParkingSpot from '../../../components/parking_spot/parkingSpot.component';
import { OpenModalAction } from '../../../redux/actions/modal.action';
import { connect } from 'react-redux';

const Region = ({ openModal }) => {

  return(
    <div>
      <header>
        <h1>Find your parking spot</h1>
        <button onClick={openModal}>Add New Parking Spot</button>
      </header>
      <ParkingSpot />
    </div>
  )
}

const mapDispachToProps = dispach => ({
  openModal: () => dispach(OpenModalAction())
})

export default connect(null, mapDispachToProps)(Region);