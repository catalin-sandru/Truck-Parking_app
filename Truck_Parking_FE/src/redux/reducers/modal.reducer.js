const modalState = {
  title: "",
  extra_info: "",
  facilities: {}
}

export default function(state = modalState, action) {
  switch(action.type) {
    case "SelectFacility":
      action.event.persist();
      const { name, checked } = action.event.target;
      const newSelected = { [name]: checked };
      const setFacility = Object.assign(state.facilities, newSelected);
      return {
        ...state,
        facilities: setFacility
      }

    default:
        return state
  }
}