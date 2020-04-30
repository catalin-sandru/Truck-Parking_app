import { combineReducers } from 'redux';

import ModalReducer from './reducers/modal.reducer';
import ParkingReducer from './reducers/parking.reducer';
import HomeReducer from './reducers/home.reducer';

export default combineReducers({
  ModalReducer,
  ParkingReducer,
  HomeReducer
})