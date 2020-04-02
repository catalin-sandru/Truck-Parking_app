import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { NavbarStyle } from './navbar.style';
import Icon from '../icon/icon';
import Home from '../../pages/home/home.component';
import Login from '../auth/login.component';

const Navbar = () => {

  const [isLoggedIn, setIsLoggedIn ] = useState(false);

  return (
    <Router>
      <NavbarStyle>
        <ul className="navbar-list">
          <li className="navbar-list__item">
            <Link to="/" className="navbar-list__link">
              <Icon icon="home" size={30} color="#000" />  
            </Link>
          </li>
          {!isLoggedIn ? 
          <li className="navbar-list__item">
            {/* <span > */}
              <Link to="/login" className="navbar-list__link">Login</Link>
            {/* </span> */}
            
            {/* <span className="navbar-list__link"> */}
              <Link to="/register" className="navbar-list__link">Register</Link>
            {/* </span> */}
          </li>
          :
          <li className="navbar-list__item">
            <Link to="/" className="navbar-list__link">Logout</Link>
          </li>
          }
        </ul>
      </NavbarStyle>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Login} />
    </Router>
  )
}

export default Navbar;