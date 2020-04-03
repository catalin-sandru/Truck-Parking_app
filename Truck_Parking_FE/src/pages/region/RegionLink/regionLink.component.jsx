import React from 'react';
import { Link } from 'react-router-dom';

const RegionLink = ({name, id}) => (
  <Link to={{
    pathname: "/region/" + id,
    state: {
      name: name
    }
    }} className="region-list__item" >{name}
  </Link>
);

export default RegionLink;