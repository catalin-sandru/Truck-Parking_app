import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Navbar from './components/navbar/navbar.component';
import Home from './pages/home/home.component';
import Login from './components/auth/login.component';
import Region from './components/region/Region.component';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Login} />
        <Route path="/region/:id" component={Region} />
      </Switch>
    </div>
  );
}

export default App;
