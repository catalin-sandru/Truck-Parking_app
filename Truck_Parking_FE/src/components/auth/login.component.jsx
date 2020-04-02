import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {

  const [ inputValues, setInputValues ] = useState({
    name: '',
    code: ''
  })

  const onChange = (e) => {
    e.preventDefault();
    console.log(inputValues)
    return setInputValues({...inputValues, [e.target.name] : e.target.value});
  }

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/add-region', {
        method: 'POST',
        ...inputValues,
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(data => data)
      .catch(err => console.log(err))
  }

  return(
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor="name">Enter Country Name</label>
        <input type="text" name="name" onChange={onChange}/>

        <label htmlFor="code">Enter Country Name</label>
        <input type="text" name="code" onChange={onChange}/>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login;