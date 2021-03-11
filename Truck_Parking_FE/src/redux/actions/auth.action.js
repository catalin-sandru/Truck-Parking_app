// import axios from 'axios'
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../constants'

export const loginAction = payload => ({
  payload,
  type: LOGIN_SUCCESS
})

export const logoutAction = () => ({
  type: LOGOUT_SUCCESS
})