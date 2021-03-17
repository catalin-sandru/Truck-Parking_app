import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const AdminRoute = ({component : Component, user, ...rest})=>{
  console.log(user)
  const { isAuth } = user;
  return(
      <Route {...rest} render={props =>{
          if(!isAuth)
              return <Redirect to={{ pathname: '/login' }}/>
          return <Component {...props}/>
      }}/>
  )
}

const mapStateToProps = state => ({
  user: state.AuthReducer
})

export default connect(mapStateToProps)(AdminRoute);