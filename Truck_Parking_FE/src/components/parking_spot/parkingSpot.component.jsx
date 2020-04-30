import React from 'react';
import { ParkingSpotStyle } from './parkingSpot.style';
// import axios from 'axios';
import Icon from '../icon/icon';
import { connect } from 'react-redux';
// import { setRegionDataAction } from '../../redux/actions/parking.action';

const ParkingSpot = ({ id, parkingRegionData, findRegion }) => {
  const aaa = findRegion(id)
  return (
    <ParkingSpotStyle>
      {aaa.parkingItems.map(({title, facilities, extra_info, coordinates, _id}) => (
        <div key={_id} className="parking__spot">
          <h2 className="parking__spot-title">{title}</h2>
          <p className="parking__spot-coordinates">{coordinates}</p>
          <div className="parking__spot-icons">
            {facilities.map(f => (
              <Icon key={f} name={f} className="parking__spot-icon"/>
              ))}
            </div>
          <p className="parking__spot-info">{extra_info}</p>
        </div>
      ))}
    </ParkingSpotStyle>
  )
}

const mapStateToProps = state => ({
  parkingRegionData: state.ParkingReducer
})

export default connect(mapStateToProps)(ParkingSpot);