import { SET_REGIONS_TO_STATE } from "../constants";

const HomeReducer = (state = [], action) => {
  switch(action.type) {
    case SET_REGIONS_TO_STATE:
      const { regions } = action;
      const sortRegions = regions.sort(function(a, b) {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      return state = sortRegions
    default:
      return state
  }
}

export default HomeReducer;