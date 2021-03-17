import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios'

import './App.css';
import Navbar from './components/navbar/navbar.component';
import Home from './pages/home/home.component';
import Login from './components/auth/login.component';
import Region from './pages/region/RegionComponent/Region.component';
import Modal from './components/modal/Modal.component';
import Register from './components/auth/register.component';
import ProtectedRoute from './components/protected_route/ProtectedRoutes';
import { loginAction, logoutAction } from './redux/actions/auth.action';
import AdminRoute from './components/protected_route/AdminRoute';
import AdminPage from './pages/Admin/Admin.component';


function App({ userIsIn, userIsOut }) {
  const token = localStorage.getItem('token');

  useEffect(() => {
    if(!token) {
      return
    }
    axios.get('http://localhost:5000/check-token', {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then(res => {
      if(res.status === 201) {
        return userIsIn(res.data);
      } else {
        return userIsOut();
      }
    })
  }, [token, userIsOut, userIsIn])

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <ProtectedRoute path="/login" component={Login} />
        <ProtectedRoute path="/register" component={Register} />
        <Route path="/region/:id" component={Region} />
        <AdminRoute path="/admin" roles={"admin"} component={AdminPage} />
      </Switch>
      <Modal/>
    </div>
  );
}

const mapDispachToProps = dispach => ({
  userIsOut: () => dispach(logoutAction()),
  userIsIn: payload => dispach(loginAction(payload))
})

export default connect(null, mapDispachToProps)(App);
