import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../constants";

const initialState = {
  isAuth: false,
  role: [],
  admin: false
}

const AuthReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_SUCCESS: {
      const { role } = action.payload;
      return state = {
        isAuth: true,
        role,
        admin: role.includes("admin") ? true : false
      }
    }
    case LOGOUT_SUCCESS: {
      localStorage.removeItem('token');
      return state = {
        isAuth: false,
        admin: false,
        role: []
      }
    }
    default: {
      return state
    }
  }
}

export default AuthReducer;