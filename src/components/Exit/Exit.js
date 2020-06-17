import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Exit(props) {

  return (
    <>
      <h2>Вы точно хотите выйти?</h2>
      <Link
        to='/profile'>
        <button
          onClick={props.handlerExit}>
          y
        </button>
      </Link>
      <Link
        to='/profile'>
        <button>
          n
        </button>
      </Link>
    </>
  )
}

Exit.propTypes = {
  handlerExit: PropTypes.func.isRequired
}
