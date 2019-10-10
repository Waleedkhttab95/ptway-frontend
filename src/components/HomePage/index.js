import React from 'react';
import {Redirect} from 'react-router-dom'
import { connect } from "react-redux";
import {adminLogin} from '../../store/actions/userAction';
import Login from '../Login';
import User from '../User';
const HomePage = (props)=>{
    const {loggedIn, isAdmin} = props.user;
    console.log('loggedIn, isAdmin',loggedIn, isAdmin);
    
    return (
        loggedIn ? 
        isAdmin ? (
          <Redirect to='/admin/statistics' />
        ) : 
         <User  />
       
        :<Login  {...props} />
    )

}

const mapStateToProps =(state)=>{
  return({
    user: state.user
  })
  }
  const mapDispatchToProps = dispatch=> {
    return {
      adminLogin: (params)=> {
        return dispatch(adminLogin(params.email,params.password))
      }
    }
  }

export default connect (mapStateToProps,mapDispatchToProps)(HomePage);