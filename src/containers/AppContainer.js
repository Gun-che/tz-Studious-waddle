import React from 'react';
import loadable from '@loadable/component'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  NavLink,
  Switch,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import { handlerExit } from '../actions/UserAction'
import LoadingComponent from '../components/LoadingComponent/LoadingComponent';
import Exit from '../components/Exit/Exit'
import { ReactComponent as Logo } from '../logo.svg';

import './App.scss';

function App(props) {

  return (
    <Router>
      <div className="App">
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
          <NavLink to='./login'
            activeClassName='active'><button>{props.loggedIn ? 'Exit' : 'LogIn'}</button></NavLink>
        </header>
        <main>
          <section className='main'>
            <Switch>
              <Route exact path='/'>
                <Home></Home>
              </Route>
              <Route exact path='/profile'>
                <Profile loggedIn={props.loggedIn}></Profile>
              </Route>
              <Route exact path='/users'>
                <Users></Users>
              </Route>
              <Route exact path='/news'>
                <News></News>
              </Route>
              <Route exact path='/login'>
                <Login></Login>
              </Route>
              <Route exact path='/exit'>
                <Exit handlerExit={props.handlerExit}></Exit>
              </Route>
            </Switch>
          </section>
        </main>
      </div>
    </Router>
  );
}

export default App;

const Home = loadable(() => import('../components/Home/Home'), {
  fallback: LoadingComponent
})

const Profile = loadable(() => import('../components/Profile/Profile'), {
  fallback: LoadingComponent
})

const Users = loadable(() => import('../components/Users/Users'), {
  fallback: LoadingComponent
})

const News = loadable(() => import('../components/News/News'), {
  fallback: LoadingComponent
})

const Login = loadable(() => import('./LoginConteqner'), {
  fallback: LoadingComponent
})

const mapDispatchToProps = dispatch => {
  return {
    handlerExit: dispatch(handlerExit())
  }
}
connect((store) => ({ loggedIn: store.user.loggedIn }), mapDispatchToProps)