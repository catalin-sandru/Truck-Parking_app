import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { NavbarStyle } from './navbar.style';
import Icon from '../icon/icon';
import { logoutAction } from '../../redux/actions/auth.action';

const Navbar = ({ isLoggedIn, logout, isAdmin }) => {

  return (
    <NavbarStyle>
      <ul className="navbar-list">
        <li className="navbar-list__item">
          <Link to="/" className="navbar-list__link">
            <Icon name="home" /> 
          </Link>
          <Link to="/about" className="navbar-list__link" >About</Link>
        </li>
        {!isLoggedIn ? 
        <li className="navbar-list__item">
          <Link to="/login" className="navbar-list__link">Login</Link>
          <Link to="/register" className="navbar-list__link">Register</Link>
        </li>
        :
        <li className="navbar-list__item">
          {isAdmin ? 
          <Link to="/admin" className="navbar-list__link">Admin</Link>
          : 
          null
          }
          <Link to="/" className="navbar-list__link" onClick={logout} >Logout</Link>
        </li>
        }
      </ul>
    </NavbarStyle>
  )
}

const mapStateToProps = state => ({
  isLoggedIn: state.AuthReducer.isAuth,
  isAdmin: state.AuthReducer.admin
})

const mapDispachToProps = dispach => ({
  logout: () => dispach(logoutAction())
})

export default connect(mapStateToProps, mapDispachToProps)(Navbar);