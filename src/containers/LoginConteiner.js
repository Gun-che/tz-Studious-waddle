import React, { useState } from 'react';
import { connect } from 'react-redux';
import { handlerLogin } from '../actions/UserAction';
import PromptLogin from '../components/PromptLogin/PromptLogin'
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { messages } from '../utils/messages'


export function Login(props) {

  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');
  const [formMsg, setFormMsg] = useState('')

  function handlerSubmit(e) {
    e.preventDefault();

    if (!login || !pass) {
      setFormMsg(messages.emptyFieldForm)

    } else {
      props.handlerLogin(login, pass);
      setPass('');
      setFormMsg('')
    }
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
      {props.loggedIn ? <Redirect to='/profile' /> : <PromptLogin
        handlerChange={handlerChange}
        handlerSubmit={handlerSubmit}
        user={props.user}
        message={props.message + formMsg}
        success={props.success}
        login={login}
        pass={pass} />}
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

Login.propTypes = {
  user: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  success: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  handlerLogin: PropTypes.func.isRequired
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)

