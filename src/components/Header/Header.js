import React from 'react'
import PropTypes from 'prop-types';
import {
  NavLink,
} from 'react-router-dom';
import { ReactComponent as Logo } from './logo.svg';

import * as s from './Header.module.scss'

export default function Header(props) {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <NavLink strict to='/'
          activeClassName={s.active}
        ><Logo width="60" heigth="60" /></NavLink>

      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              to='/profile'
              activeClassName={s.active}
            >Profile</NavLink>
          </li>
          <li>
            <NavLink
              to='/users'
              activeClassName={s.active}>Users</NavLink>
          </li>
          <li>
            <NavLink to='/news'
              activeClassName={s.active}>News</NavLink>
          </li>
        </ul>
      </nav>
      {props.loggedIn ?

        <NavLink to='./exit'
          activeClassName={s.active}><button
            className={s.btn}>Exit</button></NavLink>
        :

        <NavLink to='./login'
          activeClassName={s.active}><button
            className={s.btn}>Login</button>
        </NavLink>}
    </header>
  )
}

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
}