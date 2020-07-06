import React, { useEffect } from 'react'
import { LoadingThin, Loading } from '../LoadingComponent/LoadingComponent'
import UserPage from '../UserPage/UserPage'
import {
  useRouteMatch,
  Link,
  withRouter,
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import * as s from './Users.module.scss'

export function Users(props) {

  let { handlerRequest, isFetching, data, message } = props
  let { url } = useRouteMatch();
  useEffect(() => {
    if (data.length === 0) {
      handlerRequest(10)
    }
  }, [data.length, handlerRequest])

  const tmp = () => {

    if (isFetching && data.length === 0) {
      return <Loading />

    } else if (message) {
      console.log(message)
      return <h2>Something going wrong ({message.status})</h2>

    } else {
      return (
        <div className={s.grid}>
          {data.map((i, index) => {
            return (
              <Link to={`${url}/${index}/`} key={i.login.md5} className={s.link}>
                <div data-user={i} className={s.card} >
                  <img src={i.picture.medium} alt="" />
                  <h3>
                    {i.name.first} {i.name.last}
                  </h3>
                  <h4>Пол: {i.gender} Возраст: {i.dob.age}</h4>
                </div>
              </Link>
            )
          })}
        </div>
      )
    }
  }

  function handlerMoreResultRequest() {
    handlerRequest(10, props.data)
  }

  return (
    <div>
      <Route exact path='/users'>
        <div className="anim-light">

          {tmp()}
          {(isFetching && data.length !== 0) ? <LoadingThin /> :
            <div className={s.wrap}>
              <button className={s.btn} onClick={handlerMoreResultRequest}>Загрузить еще</button>
            </div>}
        </div>
      </Route>
      <Route exact path='/users/:userId'>
        <UserPage data={props.data} />
      </Route>
    </div>
  )
}

export default withRouter(Users)