import React from 'react';

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
          value={props.login}
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          placeholder="Password"
          onChange={props.handlerChange}
          value={props.pass}
        />
        <button type='submit'>Login</button>
      </form>

    </>
  )
  let tmp;

  if (props.message) {
    tmp = (
      <div className="failure">
        <h2>{props.message}</h2>
        {Form}
      </div>
    )
  } else {
    tmp = <div>{Form}</div>;
  }

  return tmp
}