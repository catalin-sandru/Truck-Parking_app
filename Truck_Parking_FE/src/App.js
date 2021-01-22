import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Navbar from './components/navbar/navbar.component';
import Home from './pages/home/home.component';
import Login from './components/auth/login.component';
import Region from './pages/region/RegionComponent/Region.component';
import Modal from './components/modal/Modal.component';
import Register from './components/auth/register.component';

function App() {
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

export default App;
