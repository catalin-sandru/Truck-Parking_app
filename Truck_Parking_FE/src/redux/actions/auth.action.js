// import axios from 'axios'
import { LOGIN_SUCCESS } from '../constants'

export const login = payload => ({
  payload,
  type: LOGIN_SUCCESS
})