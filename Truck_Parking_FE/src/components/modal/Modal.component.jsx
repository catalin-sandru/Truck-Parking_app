import React, { useState } from 'react';
import { connect } from 'react-redux';
import Cleave from 'cleave.js/react';

import { ModalStyle } from './Modal.style';
import Icon from '../icon/icon';
import iconSet from '../icon/icon-font/facility_icon';
import { CloseModalAction } from '../../redux/actions/modal.action';


const Modal = ({ isOpen, closeModal }) => {

  const [inputValues, setInputValues ] = useState({});

  const [ getFacilities, setFacilities ] = useState({});

  const onChange = e => {
    e.preventDefault();
    const { value, name } = e.target;
    return setInputValues({
      ...inputValues,
      [name]: value
    })
  }

  const onClick = e => {
    const { name, checked } = e.target;
    return setFacilities({
      ...getFacilities,
      [name]: checked
    })
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    const facilities = {};
    Object.keys(getFacilities).forEach(item => {
      if(getFacilities[item] !== false) {
        facilities[item] = getFacilities[item]
        return facilities
      }
    })

    const formValues = {...inputValues, facilities}
  }

  return(
    <ModalStyle isOpen={isOpen} >
      <form action="" onSubmit={onSubmit}>
        <div className="form__button-close">
          <button onClick={closeModal}>&#10008;</button>
        </div>
        <div className="form__title">
          <label htmlFor="title">Add short title</label>
          <input type="text" id="title" name="title" placeholder="Insert title" onChange={onChange} minLength="3" maxLength="8" required/>
        </div>

        <div className="form__coordinates">
          <label htmlFor="coordinates">Add coordinates
          <br/>
            <span> Enter numbers only. Special characters will be added automatically</span>
          </label>
          {/* <input type="text" id="coordinates" name="coordinates" placeholder="Insert coordinates" onChange={onChange}/> */}
          <Cleave
            required
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
              <input type="checkbox" id={i.name} name={i.name} onClick={onClick} />
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