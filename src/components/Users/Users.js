import React, { useEffect } from 'react'
import { Loading } from '../LoadingComponent/LoadingComponent'
import {
  useRouteMatch,
  useParams,
  Link,
  Switch,
  Route
} from 'react-router-dom';

import * as s from './Users.module.scss'

export default function Users(props) {

  let { handlerRequest, isFetching, data, message } = props
  let { path, url } = useRouteMatch();

  useEffect(() => {
    if (data.length === 0) {
      handlerRequest(10)
    }
  }, [data, handlerRequest])

  const tmp = () => {

    if (isFetching && !data[0]) {
      return <Loading />

    } else if (message) {
      console.log(message)
      return <h2>Something going wrong ({message.status})</h2>

    } else if (data[0]) {
      return (
        <div className={s.grid}>
          {data.map((i, index) => {
            return (
              <Link to={`${url}/${index}/`} key={i.login.md5}>
                <div data-user={i} className={s.card} >
                  <img src={i.picture.medium} alt="" />
                  <h3>
                    {i.name.title}.{' '}
                    <strong>
                      {i.name.first} {i.name.last}
                    </strong>
                  </h3>
                  <h4>Email: {i.email}</h4>
                  <h4>Username: {i.login.username}</h4>
                  <h4>Страна: {i.location.country} Город: {i.location.city}</h4>
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

      <Switch>
        <Route path={`${path}/:userId`}>
          <UserPage />
        </Route>
        <Route path={path}>
          {tmp()}
          {isFetching ? <Loading /> : null}
          <button onClick={handlerMoreResultRequest}>Загрузить еще</button>
        </Route>
      </Switch>
    </div>
  )
}

function UserPage() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}