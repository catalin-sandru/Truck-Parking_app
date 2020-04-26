import React, { useState } from 'react';
import { ParkingSpotStyle } from './parkingSpot.style';
import axios from 'axios';
import { useEffect } from 'react';
import Icon from '../icon/icon';

const ParkingSpot = () => {

  const [ parking, setParking ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:5000' + window.location.pathname)
      setParking(result.data.data)
    };
    fetchData();
  }, [])
  console.log(parking)

  return(
    <ParkingSpotStyle>
      {parking.map(({title, facilities, extra_info, coordinates, _id}) => (
        <div key={_id}>
          <h2>{title}</h2>
          <p>{coordinates}</p>
          {facilities.map(f => (
            <Icon name={f}/>
          ))}
          <p>{extra_info}</p>
        </div>
      ))}
    </ParkingSpotStyle>
  )
}

export default ParkingSpot;