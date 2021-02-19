import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { NavbarStyle } from './navbar.style';
import Icon from '../icon/icon';

const Navbar = ({ isLoggedIn }) => {

  return (
    <NavbarStyle>
      <ul className="navbar-list">
        <li className="navbar-list__item">
          <Link to="/" className="navbar-list__link">
            <Icon name="home" /> 
          </Link>
        </li>
        {!isLoggedIn ? 
        <li className="navbar-list__item">
          <Link to="/login" className="navbar-list__link">Login</Link>
          <Link to="/register" className="navbar-list__link">Register</Link>
        </li>
        :
        <li className="navbar-list__item">
          <Link to="/" className="navbar-list__link">Logout</Link>
        </li>
        }
      </ul>
    </NavbarStyle>
  )
}

const mapStateToProps = state => ({
  isLoggedIn: state.AuthReducer.isAuth
})

export default connect(mapStateToProps)(Navbar);