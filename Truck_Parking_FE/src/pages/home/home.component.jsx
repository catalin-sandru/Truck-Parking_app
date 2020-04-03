import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HomeStyle } from './home.style';
import RegionLink from '../../components/region/regionLink.component';

const Home = () => {

  const [ regions, getRegions ] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000')
      .then(res => getRegions(res.data.regions))
      .catch(err => console.log(err))
  }, [])

  return(
    <HomeStyle>
      <h1 className="page-title">Stop and rest</h1>
      <div className="region-list">
      {regions.map(r => (
        <RegionLink name={r.name} id={r._id} key={r._id}/>
      ))}
      </div>
    </HomeStyle>
  )
}

export default Home;