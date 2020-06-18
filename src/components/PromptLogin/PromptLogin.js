import React from 'react';
import * as s from './PromptLogin.module.scss'
import { LoadingThin } from '../LoadingComponent/LoadingComponent'

export default function (props) {
  let Form = (
    <div className={s.formWrap}>
      <h1>Login</h1>
      <form action="" onSubmit={props.handlerSubmit}>
        <label
          className={s.l1}
          htmlFor="login">Login</label>
        <input
          className={s.i1}
          type="text"
          id="login"
          placeholder="Login@example.com"
          required
          pattern=".+@.+\..+"
          onChange={props.handlerChange}
          value={props.login}
        />
        <label
          className={s.l2}
          htmlFor="password">Password</label>
        <input
          className={s.i2}
          type="password"
          id="password"
          required
          minLength="4"
          maxLength="16"
          placeholder="Password"
          onChange={props.handlerChange}
          value={props.pass}
        />
        <div className={s.submit}>
          <button className={s.btn} type='submit'>Login</button>
        </div>
      </form>

    </div>
  )
  let tmp;

  if (props.message) {
    tmp = (
      <div className={s.wrap}>
        {props.message === 'Loading...' ?
          <div className={s.loading}><LoadingThin /></div> :
          <h2 className={s.failure}>{props.message}</h2>}
        {Form}
      </div>
    )
  } else {
    tmp = <div>{Form}</div>;
  }

  return tmp
}