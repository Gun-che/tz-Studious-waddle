import React from 'react';
import { Redirect } from 'react-router';


export default function (props) {
  let Form = (
    <>
      <h1>Login</h1>
      <form action="" onSubmit={props.handlerSubmit}>
        <label htmlFor="login">Login</label>
        <input
          type="text"
          id="login"
          placeholder="Login"
          onChange={props.handlerChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          placeholder="Password"
          onChange={props.handlerChange}
        />
        <button type='submit'>Login</button>
      </form>

    </>
  )
  let tmp;

  if (props.success) {
    tmp = <Redirect to='/profile' />
  } else if (props.message) {
    tmp = (
      <>
        <h2>{props.message}</h2>
        {Form}
      </>
    )
  } else {
    tmp = Form;
  }


  return <div>{tmp}</div>
}