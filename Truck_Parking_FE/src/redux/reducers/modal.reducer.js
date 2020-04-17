import { OpenModal, CloseModal } from '../constants';


export default function(state = false, action) {
  switch(action.type) {
    case OpenModal:
      return state = true;
    case CloseModal:
      return state = false;
    default:
        return state
  }
}