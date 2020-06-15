import React from 'react';
import { Link } from 'react-router-dom';



export default function Profile(props) {

  return (
    <div>
      {props.loggedIn ? <h2>Привет, бро!</h2> :
        <h2>Чтобы увидеть данный раздел пожалуйста
        <Link to='/login'>Авторизуйтесь</Link>
        </h2>}
    </div>
  )
}

