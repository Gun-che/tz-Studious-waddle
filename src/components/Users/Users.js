import React, { useEffect } from 'react'
import { Loading } from '../LoadingComponent/LoadingComponent'

import * as s from './Users.module.scss'



export default function Users(props) {

  let { handlerRequest, isFetching, data, message } = props

  useEffect(() => {
    handlerRequest(10)
  }, [handlerRequest])

  const tmp = () => {

    if (isFetching) {
      return <Loading />

    } else if (message) {
      console.log(message)
      return <h2>Something going wrong ({message.status})</h2>

    } else if (data[0]) {
      return (
        <div className={s.grid}>
          {data.map(i => {
            return (
              <div className={s.card} key={i.login.md5}>
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
      {tmp()}
      <button onClick={handlerMoreResultRequest}>Загрузить еще</button>
    </div>
  )
}