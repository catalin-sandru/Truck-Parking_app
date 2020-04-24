import React, { useState, useReducer } from 'react';
import { connect } from 'react-redux';
import Cleave from 'cleave.js/react';
import axios from 'axios';

import { ModalStyle } from './Modal.style';
import Icon from '../icon/icon';
import iconSet from '../icon/icon-font/facility_icon';
import { CloseModalAction } from '../../redux/actions/modal.action';

const initFacilities = [];

const onClick = (state, action) => {
  const { name, type } = action
  switch(type) {
    case true:
      return state.concat([name]);
    case false:
      const newState = state.filter(f => f !== name);
      return state = newState;
    default:
      return state
  }
}

const Modal = ({ isOpen, closeModal }) => {

  const [ inputValues, setInputValues ] = useState({});
  
  const [ facilities, setFacilities ] = useReducer(onClick, initFacilities);

  const validate = e => {
    const { el } = e.target
    if(el.value.length < el.minLength) {
      return el.setCustomValidity(el.name + " is too short")
    } else if(el.value.length > el.maxLength) {
      return el.setCustomValidity(el.name + "is too long.")
    }
  }

  const onChange = e => {
    e.preventDefault();
    const { value, name } = e.target;
    return setInputValues({
      ...inputValues,
      [name]: value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    validate(e);
    const formValues = {...inputValues, facilities};

    axios.post('http://localhost:5000' + window.location.pathname, formValues)
      .then(res => {
        console.log(res)
        return closeModal;
      })
      .catch(err => console.log(err))
  }

  return(
    <ModalStyle isOpen={isOpen} >
      <form onSubmit={onSubmit}>
        <div className="form__button-close">
          <p onClick={closeModal}>&#10008;</p>
        </div>
        <div className="form__title">
          <label htmlFor="title">Add short title</label>
          <input type="text" id="title" name="title" placeholder="Insert title" onChange={onChange} pattern=".{3,150}" required />
        </div>
        
        <div className="form__coordinates">
          <label htmlFor="coordinates">Add coordinates
          <br/>
            <span>Enter numbers only. Special characters will be added automatically</span>
          </label>
          <Cleave
            required
            pattern=".{23,26}"
            placeholder="00&#xb0;00&#x2019;00.0&#x201D;N 00&#xb0;00&#x2019;00.0&#x201D;W"
            onChange={onChange} 
            name="coordinates" 
            options={{
              delimiters: ['°', '\'', '.', '"N ', '°', '\'', '.', '"E'],
              blocks: [2, 2, 2, 1, 2, 2, 2, 1, 0],
              numericOnly: true,
              uppercase: true
              }}
          />
        </div>

        <div className="form__icons">
          {iconSet.map(i => (
            <label htmlFor={i.name} key={i.name}>
              <p>{i.name}</p>
              <input type="checkbox" id={i.name} name={i.name} onClick={(e) => {setFacilities({type: e.target.checked, name: e.target.name})}} />
              <Icon name={i.name} />
            </label>
          ))}
        </div>
        
        <div className="form__textarea">
          <label htmlFor="extra_info">Add extra information</label>
          <input type="textarea" id="extra_info" name="extra_info" onChange={onChange}/>
        </div>
        
        <div className="form__button-submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </ModalStyle>
  )
}

const mapStateToProps = state => ({
  isOpen: state.ModalReducer,
});
const mapDispachToProps = dispach => ({
  closeModal: () => dispach(CloseModalAction())
})

export default connect(mapStateToProps, mapDispachToProps)(Modal); 