import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = ({component: Component, isAuth, ...rest}) => {
  return (
    <Route {...rest} render={props => {
      if(isAuth) return <Redirect to={{ pathname: '/'}} />
      return <Component {...props} />
    }}/>
  )
}

const mapStateToProps = state => ({
  isAuth: state.AuthReducer.isAuth
})

export default connect(mapStateToProps)(ProtectedRoute)