import React, { useState, useReducer } from 'react';
import { ModalStyle } from './Modal.style';

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
  console.log(action.e.target.checked)
  switch(action.type) {
    case "parking":
    case "shower":
      return state.facilities = {...state.facilities, [name]: checked};
    
      default:
        return state
  }
}

const Modal = () => {
  const [ state, dispach ] = useReducer(reducer, initialState);
  console.log(state)

  return(
    <ModalStyle>
      <form action="">
        <label htmlFor="title">Add short title</label>
        <input type="text" name="title" placeholder="Insert title" />

        <label htmlFor="parking" >Parking</label>
        <input type="checkbox" name="parking" onClick={e => dispach({type: "parking", e})} />

        <label htmlFor="shower">Shower</label>
        <input type="checkbox" name="shower" onClick={e => dispach({type: "shower", e})} />

        <label htmlFor="extra_info">Add extra information</label>
        <input type="textarea" name="extra_info" />

        <button type="submit">Submit</button>
      </form>
    </ModalStyle>
  )
}

export default Modal;