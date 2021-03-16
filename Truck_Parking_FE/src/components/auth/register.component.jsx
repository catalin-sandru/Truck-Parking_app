import React, { useState } from 'react';
import axios from 'axios';
import PopBox from '../pop_box/pop_box.component';
import { connect } from 'react-redux';
import { loginAction } from '../../redux/actions/auth.action';

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
      .post('http://localhost:5000/register', {
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
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" onChange={onChange} required/>

        <label htmlFor="password">Password</label>
        <input type="password" name="password" onChange={onChange} required/>

        <label htmlFor="confirmPassword">Confirm password</label>
        <input type="password" name="confirmPassword" onChange={onChange} required/>

        <button type="submit" >Submit</button>
      </form>

      <PopBox message={message} />
    </div>
  )
}

const mapDispachToProps = dispach => ({
  logUserIn: payload => dispach(loginAction(payload))
})

export default connect(null, mapDispachToProps)(Register);