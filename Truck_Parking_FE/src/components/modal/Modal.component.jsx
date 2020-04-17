import React, { useState } from 'react';
import { connect } from 'react-redux';

import { ModalStyle } from './Modal.style';
import Icon from '../icon/icon';
import iconSet from '../icon/icon-font/facility_icon';
import { CloseModalAction } from '../../redux/actions/modal.action';


const Modal = ({ isOpen, closeModal }) => {

  const [inputValues, setInputValues ] = useState({
    title: "",
    extra_info: "",
  })

  const [ facilities, setFacilities ] = useState({})

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
      ...facilities,
      [name]: checked
    })
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    const formValues = {...inputValues, facilities}
    console.log(formValues)
  }

  return(
    <ModalStyle isOpen={isOpen}>
      <form action="" onSubmit={onSubmit}>
        <div className="form__button-close">
          <button onClick={closeModal}>&#10008;</button>
        </div>
        <div className="form__title">
          <label htmlFor="title">Add short title</label>
          <input type="text" id="title" name="title" placeholder="Insert title" onChange={onChange} />
        </div>

        <div className="form__coordinates">
          <label htmlFor="coordinates">Add coordinates</label>
          <input type="text" id="coordinates" name="coordinates" placeholder="Insert coordinates" onChange={onChange} />
        </div>

        <div className="form__icons">
          {iconSet.map(i => (
            <label htmlFor={i.name} key={i.name}>
              <Icon name={i.name} />
              <input type="checkbox" id={i.name} name={i.name} onClick={onClick} />
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