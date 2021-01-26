import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {

  const [ inputValues, setInputValues ] = useState({
    email: '',
    password: ''
  })

  const onChange = (e) => {
    e.preventDefault();
    return setInputValues({...inputValues, [e.target.name] : e.target.value});
  }

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/login', {
        method: 'POST',
        ...inputValues,
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  return(
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor="email">Enter e-mail</label>
        <input type="email" name="email" onChange={onChange}/>

        <label htmlFor="password">Enter password</label>
        <input type="password" name="password" onChange={onChange}/>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login;