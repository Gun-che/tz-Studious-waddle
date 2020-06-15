import React from 'react'
import { Link } from 'react-router-dom';

export default function (props) {

  return (
    <>
      <h2>Вы точно хотите выйти?</h2>
      <button onClick={props.handlerExit}>y</button>
      <Link to='/profile'><button>n</button></Link>
    </>
  )
}
