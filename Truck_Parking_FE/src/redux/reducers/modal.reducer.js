import { OPEN_MODAL, CLOSE_MODAL } from '../constants';


const ModalReducer = (state = false, action) => {
  switch(action.type) {
    case OPEN_MODAL:
      return state = true;
    case CLOSE_MODAL:
      return state = false;
    default:
        return state
  }
}

export default ModalReducer