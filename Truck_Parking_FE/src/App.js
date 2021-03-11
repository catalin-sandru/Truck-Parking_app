import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import Navbar from './components/navbar/navbar.component';
import Home from './pages/home/home.component';
import Login from './components/auth/login.component';
import Region from './pages/region/RegionComponent/Region.component';
import Modal from './components/modal/Modal.component';
import Register from './components/auth/register.component';
import { loginAction, logoutAction } from './redux/actions/auth.action';


function App({ userIsIn, userIsOut }) {
  const token = localStorage.getItem('token');

  useEffect(() => {
    if(!token) {
      return userIsOut;
    }
    async function checkToken() {
      const sendToken = await fetch('http://localhost:5000/check-token', {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
      if(sendToken.status === 201) {
        return userIsIn();
      } else {
        return userIsOut()
      }
    }
    checkToken()
  }, [token, userIsOut, userIsIn])

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/region/:id" component={Region} />
      </Switch>
      <Modal/>
    </div>
  );
}

const mapDispachToProps = dispach => ({
  userIsOut: () => dispach(logoutAction()),
  userIsIn: () => dispach(loginAction())
})

export default connect(null, mapDispachToProps)(App);
