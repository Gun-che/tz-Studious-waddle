import React from 'react';
import { useParams, Link } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';

import * as s from './UserPage.module.scss'

export default function (props) {
  let { userId } = useParams();
  let tmp;

  if (props.data[userId]) {
    let { gender, email, dob, picture, login, name, phone, location } = props.data[userId]
    tmp = () => {
      return (
        <div className={s.wrap}>
          <img src={picture.large} alt={name.first} />
          <div className={s.info}><h3>
            {name.title}{'. '}
            <strong>
              {name.first} {name.last}
            </strong>
            <h4>Пол: {gender} Возраст: {dob.age}</h4>
          </h3>
            <h4>Email: {email}</h4>
            <h4>Username: {login.username}</h4>
            <h4>Страна: {location.country}, штат: {location.state}, </h4>
            <h4>город: {location.city}, </h4>
            <h4>улица: {location.street.name}, дом: {location.street.number}</h4>
            <h5>телефон: {phone}</h5></div>
        </div>
      )

    }

  } else {
    tmp = () => <NotFound />
  }
  return (
    <>
      <div>{tmp()}</div>
      <Link to='/users'>Назад</Link>
    </>
  )
}
