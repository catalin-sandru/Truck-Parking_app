import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import PopBox from '../pop_box/pop_box.component';
import { login } from '../../redux/actions/auth.action';

const Login = ({ onSubmit, isAuth }) => {

  const [ inputValues, setInputValues ] = useState({
    email: '',
    password: ''
  })
  const [ message, setMessage ] = useState('');

  const onChange = (e) => {
    e.preventDefault();
    setMessage('')
    return setInputValues({...inputValues, [e.target.name] : e.target.value});
  }

  const submitForm = (e) => {
    e.preventDefault();
    const { email, password } = inputValues;
    const user = {
      email, password
    }
    axios
      .post('http://localhost:5000/login', {
        method: 'POST',
        ...user,
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
        setMessage(res.data.message);
        onSubmit(res.data)
      })
      .catch(err => {
        console.log(err)
        setMessage(err.response.data.message)
        throw err
      })
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

      <PopBox message={message} />
    </div>
  )
}

// const mapStateToProps = state => ({
//   isAuth: state.AuthReducer.isAuth
// });
const mapDispachToProps = dispach => ({
  onSubmit: data => dispach(login(data))
})

export default connect(null, mapDispachToProps)(Login);