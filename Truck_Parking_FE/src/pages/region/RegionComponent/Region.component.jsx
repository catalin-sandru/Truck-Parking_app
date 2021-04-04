import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import ParkingSpot from '../../../components/parking_spot/parkingSpot.component';
import { OpenModalAction } from '../../../redux/actions/modal.action';
import { setRegionDataAction } from '../../../redux/actions/parking.action';
import { RegionStyle } from './Region.stye';


const Region = ({ openModal, match, addParkingData, setRegionData, isAuth }) => {

  const _id = match.params.id;
  
  const findRegion = _id => {
    const regionFromState = addParkingData.find(r => r._id === _id); 
    return regionFromState
  }

  useEffect(() => {
    if(!addParkingData.length || !findRegion(_id)) {
      axios
        .get(process.env.REACT_APP_SERVER_URL + window.location.pathname)
        .then(result => {
          return setRegionData(result.data.data)
        })
        .catch(err => console.log(err))
    }
  }, [setRegionData, addParkingData.length, _id, findRegion])

  return(
    <RegionStyle>
      <header>
        <h1>Find your parking spot</h1>
        {isAuth 
        ? 
          <button onClick={openModal}>Add New Parking Spot</button> 
        : 
        <p>You need to be logged in to add parking spots</p>}
      </header>
      {!findRegion(_id) && <>Loading...</>}
      {findRegion(_id) && <ParkingSpot id={_id} findRegion={findRegion}/>}
    </RegionStyle>
  )
}

const mapStateToProps = state => ({
  addParkingData: state.ParkingReducer,
  isAuth: state.AuthReducer.isAuth
})

const mapDispachToProps = dispach => ({
  openModal: () => dispach(OpenModalAction()),
  setRegionData: data => dispach(setRegionDataAction(data))
})

export default connect(mapStateToProps, mapDispachToProps)(Region);