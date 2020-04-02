import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Region = ({name}) => {
  return(
    <Router>
      <Link to={name.toLowerCase()} >{name}</Link>
    </Router>
  )
};

export default Region;