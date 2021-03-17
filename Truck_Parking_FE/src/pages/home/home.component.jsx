import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { HomeStyle } from './home.style';
import RegionLink from '../../components/RegionLink/regionLink.component';
import { setRegionsToStateAction } from '../../redux/actions/home.action';

const Home = ({ regions, setRegionsToState }) => {

  useEffect(() => {
    if(!regions.length) {
      axios.get('http://localhost:5000')
      .then(res => setRegionsToState(res.data.regions))
      .catch(err => console.log(err))
    }
  })

  return(
    <HomeStyle>
      {/* <h3 className="page-title">Select a country to find a place to rest or other amenities</h3> */}
      <div className="region-list">
        {regions.map(r => (
          <RegionLink name={r.name} id={r._id} key={r._id}/>
        ))}
      </div>
    </HomeStyle>
  )
}

const mapStateToProps = state => ({
  regions: state.HomeReducer
})

const mapDispachToProps = dispach => ({
  setRegionsToState: data => dispach(setRegionsToStateAction(data))
})

export default connect(mapStateToProps, mapDispachToProps)(Home);