import React, { useState } from 'react';
import axios from 'axios';

import PopBox from '../pop_box/pop_box.component';
import { connect } from 'react-redux';
import { loginAction } from '../../redux/actions/auth.action';
import { FormStyle } from './Form.style';

const Register = ({ logUserIn }) => {
  const [ credentials, setCredentials ] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  })

  const [ message, setMessage ] = useState('')

  const onChange = e => {
    e.preventDefault();
    setMessage('')
    return setCredentials({...credentials, [e.target.name]: e.target.value })
  }

  const onSubmit = e => {
    e.preventDefault();
    const { email , password, confirmPassword } = credentials;
    if(password !== confirmPassword) {
      return setMessage('Password missmatch.')
    } else if(password.length < 6) {
      return setMessage('Password must be 6 characters long.')
    }
    
    const newUser = {
      email,
      password,
      role: ["user"]
    }

    axios
      .post(process.env.REACT_APP_SERVER_URL + '/register', {
        method: 'post',
        ...newUser,
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(resData => {
        setMessage(resData.data.message);
        localStorage.setItem('token', resData.data.token)
        logUserIn(resData.data)
      })
      .catch(err => {
        setMessage(err.response.data.message);
      }
      )
  }


  return(
    <FormStyle>
      <form onSubmit={onSubmit}>
        <div className="form__email">
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" onChange={onChange} required/>
        </div>

        <div className="form__password">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={onChange} required/>
        </div>

        <div className="form__confirm-password">
          <label htmlFor="confirmPassword">Confirm password</label>
          <input type="password" name="confirmPassword" onChange={onChange} required/>
        </div>

        <div className="form__submit">
          <button type="submit" >Submit</button>
        </div>
      </form>

      <PopBox message={message} />
    </FormStyle>
  )
}

const mapDispachToProps = dispach => ({
  logUserIn: payload => dispach(loginAction(payload))
})

export default connect(null, mapDispachToProps)(Register);