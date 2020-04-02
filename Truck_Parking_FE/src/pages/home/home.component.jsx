import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Region from '../../components/region/region.component';
import { HomeStyle } from './home.style';

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
      <ul className="region-list">
      {regions.map(r => {
        return(
          <li key={r._id} className="region-list__item">
            <Region name={r.name} />
          </li>
        )
      })}
      </ul>
    </HomeStyle>
  )
}

export default Home;