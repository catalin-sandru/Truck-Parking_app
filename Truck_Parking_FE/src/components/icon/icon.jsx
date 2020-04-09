import React from 'react';

import facility_icon from './icon-font/facility_icon';
import app_icon from './icon-font/app_icon';


const Icon = ({ name }) => {
  const iconSet = [...facility_icon, ...app_icon];
  const getIcon = iconSet.find(i => i.name === name);
  
  return(
    <img src={getIcon.path} />
  )
}

export default Icon;