import { SET_DATA } from "../constants";

const findRegion = (state, id) => {
  return state.includes(r => r._id === id)
}

const ParkingReducer = (state = [], action) => {

  const region = action.data;

  switch(action.type) {
    case SET_DATA:
      if(state.length < 0 || !findRegion(state, region[0]._id)) {
          return [...state, ...region];
        } else {
          return state
        }
    default:
      return state
  }
}

export default ParkingReducer;