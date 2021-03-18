import React, { useState } from 'react';
import axios from 'axios';
import { FormStyle } from '../../components/auth/Form.style';
import PopBox from '../../components/pop_box/pop_box.component';

export default function AdminPage() {
  const [ inputValues, setInputValues ] = useState({
    name: '',
    code: ''
  })

  const [ message, setMessage ] = useState("")

  const onChange = (e) => {
    e.preventDefault();
    return setInputValues({...inputValues, [e.target.name] : e.target.value});
  }

  const submitForm = (e) => {
    e.preventDefault();
    const { name, code } = inputValues;
    const region = {
      name, code
    }
    axios
      .post('http://localhost:5000/add-region', {
        ...region,
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        setMessage(res.data.message)
        setInputValues({name: "", code: ""})
      })
      .catch(err => {
        console.log(err)
        throw err
      })
  }

  return (
    <FormStyle>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="name">Region name</label>
          <input type="name" name="name" onChange={onChange}/>
        </div>

        <div>
          <label htmlFor="code">Region code</label>
          <input type="code" name="code" onChange={onChange}/>
        </div>

        <div className="form__submit" >
          <button type="submit">Submit</button>
        </div>
      </form>

      <PopBox message={message} />
    </FormStyle>
  );
}
