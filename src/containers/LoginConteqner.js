import React, { useState } from 'react';
import { connect } from 'react-redux';
import { handlerLogin } from '../actions/UserAction';
import PromptLogin from '../components/PromptLogin/PromptLogin'
import { Redirect } from 'react-router-dom';


function Login(props) {

  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');

  function handlerSubmit(e) {
    e.preventDefault();
    props.handlerLogin(login, pass)
  }

  function handlerChange(e) {
    if (e.target.id === 'login') {
      setLogin(e.target.value)
    } else if (e.target.id === 'password') {
      setPass(e.target.value)
    }
  }


  return (
    <>
      {false ? <Redirect to='/exit' /> : <PromptLogin
        handlerChange={handlerChange}
        handlerSubmit={handlerSubmit}
        user={props.user}
        message={props.message}
        success={props.success} />}
    </>
  )
}

const mapStateToProps = store => {
  return {
    user: store.user.login,
    message: store.user.message,
    success: store.user.success,
    loggedIn: store.user.loggedIn,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handlerLogin: (login, pass) => dispatch(handlerLogin(login, pass))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)

