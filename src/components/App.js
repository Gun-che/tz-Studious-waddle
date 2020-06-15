import React from 'react';
import './App.scss';
import {
  Link,
  Switch,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.scss';
import Home from './Home';
import Profile from './Profile';
import Users from './Users';
import News from './News';
import LoginBtns from '../containers/LoginBtns';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className='logo'>
            <Link to='/'>LOGO</Link>
          </div>
          <nav>
            <ul>
              <li>
                <Link to='/profile'>Profile</Link>
              </li>
              <li>
                <Link to='/users'>Users</Link>
              </li>
              <li>
                <Link to='/news'>News</Link>
              </li>
            </ul>
          </nav>
          <LoginBtns></LoginBtns>
        </header>
        <main>
          <section className='main'>
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
            </Switch>
          </section>
        </main>
      </div>
    </Router>
  );
}

export default App;
