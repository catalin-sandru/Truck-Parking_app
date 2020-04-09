import React, { useState, useReducer } from 'react';
import { ModalStyle } from './Modal.style';
import Icon from '../icon/icon';
const iconSet = require('../icon/icon-font/icon-collection.json');

const initialState = {
  title: "",
  extra_info: "",
  facilities: {
    parking: false,
    shower: false
  }
}

const reducer = (state, action) => {
  const { name, checked } = action.e.target;
  console.log(checked)
  switch(action.type) {
    case action.type:
      return state.facilities = {...state.facilities, [name]: !checked};
    
      default:
        return state
  }
}

const Modal = () => {
  const [ state, dispach ] = useReducer(reducer, false);
  console.log(state)

  return(
    <ModalStyle>
      <form action="">
        <label htmlFor="title">Add short title</label>
        <input type="text" name="title" placeholder="Insert title" />

        {iconSet.map(i => (
          <label htmlFor={i.name} key={i.name}>
            <Icon path={i.path}/>
            <input type="checkbox" id={i.name} onClick={e => dispach({type: i.name, e})} />
          </label>
        ))}

        <label htmlFor="extra_info">Add extra information</label>
        <input type="textarea" name="extra_info" />

        <button type="submit">Submit</button>
      </form>
    </ModalStyle>
  )
}

export default Modal;