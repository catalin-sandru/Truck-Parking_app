import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../constants";

const initialState = {
  isAuth: false
}

const AuthReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_SUCCESS: {
      return state = {
        isAuth: true
      }
    }
    case LOGOUT_SUCCESS: {
      localStorage.removeItem('token');
      return state = {
        isAuth: false
      }
    }
    default: {
      return state
    }
  }
}

export default AuthReducer;