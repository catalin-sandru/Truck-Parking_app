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
      .then(res => {
        if(res.status === 422) {
          throw new Error('Validation failed!')
        }
        if(res.status !== 200 && res.status !== 201) {
          console.log('Error');
          throw new Error('Could not authenticate you!')
        }
        // handle response with token at login
        return res.json();
      })
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