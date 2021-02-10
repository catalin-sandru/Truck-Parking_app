import { LOGIN_SUCCESS } from "../constants";

const initialState = {
  isAuth: false,
  token: localStorage.getItem('token'),
  userId: "",
}

const AuthReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_SUCCESS: {
      localStorage.setItem('token', action.payload.token)
      return state = {
        isAuth: true,
        userId: action.payload.user,
        token: action.payload.token
      }
    }
    default: {
      return state
    }
  }
}

export default AuthReducer;