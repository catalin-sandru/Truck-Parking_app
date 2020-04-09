import React from 'react';
import { connect } from 'react-redux';

import { ModalStyle } from './Modal.style';
import Icon from '../icon/icon';
import { setIconAction } from '../../redux/actions/modal.action';
import iconSet from '../icon/icon-font/facility_icon';


const Modal = ({ icons, setIcon }) => {
  // console.log(icons)
  return(
    <ModalStyle>
      <form action="">
        <label htmlFor="title">Add short title</label>
        <input type="text" name="title" placeholder="Insert title" />

        {iconSet.map(i => (
          <label htmlFor={i.name} key={i.name}>
            <Icon name={i.name} />
            <input type="checkbox" id={i.name} name={i.name} onClick={e => setIcon(e)} />
          </label>
        ))}

        <label htmlFor="extra_info">Add extra information</label>
        <input type="textarea" name="extra_info" />

        <button type="submit">Submit</button>
      </form>
    </ModalStyle>
  )
}

const mapStateToProps = state => (console.log(state), {
  icons: state.ModalReducer.facilities,
});
const mapDispachToProps = dispach => ({
  setIcon: e => dispach(setIconAction(e))
})

export default connect(mapStateToProps, mapDispachToProps)(Modal);