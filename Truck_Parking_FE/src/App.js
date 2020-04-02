import React from 'react';
import { Provider } from 'react-redux';

import './App.css';
import Navbar from './components/navbar/navbar.component';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar/>
      </div>
    </Provider>
  );
}

export default App;
