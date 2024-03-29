import React from 'react';
import { ParkingSpotStyle } from './parkingSpot.style';
import Icon from '../icon/icon';
import { connect } from 'react-redux';

const ParkingSpot = ({ id, findRegion }) => {
  const aaa = findRegion(id)
  return (
    <ParkingSpotStyle>
      {aaa.parkingItems.map(({title, facilities, extra_info, coordinates, _id}) => (
        <div key={_id} className="parking__spot">
          <h2 className="parking__spot-title">{title}</h2>
          <p className="parking__spot-coordinates">
            <Icon name="atlas"/>
            <span> {coordinates}</span>
          </p>
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