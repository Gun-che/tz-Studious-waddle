import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as s from './Exit.module.scss'

export default function Exit(props) {

  return (
    <div className={s.wrap}>
      <div className={s.window}>
        <h2>Вы точно хотите выйти?</h2>
        <Link
          to='/profile'>
          <button
            onClick={props.handlerExit}>
            да
          </button>
        </Link>
        <Link
          to='/profile'>
          <button>
            нет
          </button>
        </Link>
      </div>
    </div>
  )
}

Exit.propTypes = {
  handlerExit: PropTypes.func.isRequired
}
