import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [ credentials, setCredentials ] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  })

  const onChange = e => {
    e.preventDefault();
    console.log(credentials)
    return setCredentials({...credentials, [e.target.name]: e.target.value })
  }

  const onSubmit = e => {
    e.preventDefault();
    const { email , password, confirmPassword } = credentials;
    if(password !== confirmPassword && password.length < 4) {
      return alert('password missmatch')
    }
    const newUser = {
      email, password
    }
    axios
      .post('http://localhost:5000/register', {
        method: 'post',
        ...newUser,
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(data => data)
      .catch(err => console.log(err))
  }


  return(
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" onChange={onChange} required/>

        <label htmlFor="password">Password</label>
        <input type="password" name="password" onChange={onChange} required/>

        <label htmlFor="confirm-password">Confirm password</label>
        <input type="password" name="confirm-password" onChange={onChange} required/>

        <button type="submit" >Submit</button>
      </form>
    </div>
  )
}

export default Register;