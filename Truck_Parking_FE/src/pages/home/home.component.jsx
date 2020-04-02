import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Region from '../../components/region/region.component';

const Home = () => {

  const [ regions, getRegions ] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000')
      .then(res => getRegions(res.data.regions))
      .catch(err => console.log(err))
  }, [])

  return(
    <div>
      <h1 className="page-title">Stop and rest</h1>
      <div className="country-list">
        <ul>
        {regions.map(r => {
          return(
            <li>
              <Region name={r.name}/>
            </li>
          )
        })}
        </ul>
      </div>
    </div>
  )
}

export default Home;