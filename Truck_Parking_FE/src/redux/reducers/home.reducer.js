import { SET_REGIONS_TO_STATE } from "../constants";

const HomeReducer = (state = [], action) => {
  switch(action.type) {
    case SET_REGIONS_TO_STATE:
      return state = action.regions
    default:
      return state
  }
}

export default HomeReducer;