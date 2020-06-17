import React from 'react'
import PropTypes from 'prop-types';
import {
  NavLink,
} from 'react-router-dom';
import { ReactComponent as Logo } from './logo.svg';

export default function Header(props) {
  return (
    <header className="App-header">
      <div className='logo'>
        <NavLink strict to='/'
          activeClassName='active'
        ><Logo width="70" heigth="70" />logo</NavLink>

      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              to='/profile'
              activeClassName='active'
            >Profile</NavLink>
          </li>
          <li>
            <NavLink
              to='/users'
              activeClassName='active'>Users</NavLink>
          </li>
          <li>
            <NavLink to='/news'
              activeClassName='active'>News</NavLink>
          </li>
        </ul>
      </nav>
      {props.loggedIn ?

        <NavLink to='./exit'
          activeClassName='active'><button>Exit</button></NavLink>
        :

        <NavLink to='./login'
          activeClassName='active'><button>Login</button>
        </NavLink>}
    </header>
  )
}

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
}