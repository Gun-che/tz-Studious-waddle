import React from 'react'
import {
  Switch,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import loadable from '@loadable/component'

import Header from '../Header/Header';
import Exit from '../Exit/Exit'
import { LoadingComponent } from '../LoadingComponent/LoadingComponent';

import * as s from './App.module.scss';

export default function App(props) {
  return (
    <Router>
      <div className={s.app}>
        <Header loggedIn={props.loggedIn} />
        <main>
          <section className={s.main}>
            <Switch>
              <Route exact path='/'>
                <Home></Home>
              </Route>
              <Route exact path='/profile'>
                <Profile></Profile>
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
                <Exit handlerExit={props.handlerExit}
                  loggedIn={props.loggedIn}></Exit>
              </Route>
            </Switch>
          </section>
        </main>
      </div>
    </Router>
  )
}

const Home = loadable(() => import('../Home/Home'), {
  fallback: LoadingComponent
})

const Profile = loadable(() => import('../../containers/ProfileContainer'), {
  fallback: LoadingComponent
})

const Users = loadable(() => import('../../containers/UsersContainer'), {
  fallback: LoadingComponent
})

const News = loadable(() => import('../../containers/NewsContainer'), {
  fallback: LoadingComponent
})

const Login = loadable(() => import('../../containers/LoginConteiner'), {
  fallback: LoadingComponent
})