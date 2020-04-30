import { SET_REGIONS_TO_STATE } from "../constants";

export const setRegionsToStateAction = regions => ({
  type: SET_REGIONS_TO_STATE,
  regions
})