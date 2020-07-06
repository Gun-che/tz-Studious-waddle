import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../LoadingComponent/LoadingComponent';
import * as s from './Profile.module.scss'
import img from './profile-photo.jpg'
import { linkFormatter } from '../../utils/linksFormatter';

export default function Profile(props) {

  useEffect(() => {
    const handlerRequest = props.handlerRequest;
    handlerRequest(props.userId)
  }, [props.handlerRequest, props.userId])

  function tmp() {

    if (props.data.userId) {
      return (
        <div className={s.wrap}>
          <div className={s.info}><div className={s.loc}>
            <h2>Город: {props.data.city}</h2>
          </div>
            <div className={s.lang}>
              <h2>Языки:</h2>
              {props.data.languages.map(i => {
                return <h3 key={i}>{i}</h3>
              })}
            </div>
          </div>
          <div className={s.photo}>
            <img src={img} alt="nice girl" />
          </div>
          <div className={s.soc}>
            {props.data.social
              .sort((a, b) => b.label === 'web' ? 1 : -1)
              .map(i => {
                const src = linkFormatter(i)

                return <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href={i.link} key={i.link}
                  className={s.link}>
                  <img
                    src={src}
                    alt={i.label} /></a>
              })}
          </div>
        </div>
      )
    } else if (props.message) {
      return <h2>{props.message}</h2>

    } else if (props.isFetching) {
      return <Loading />
    }
  }

  return (
    <div className="anim">
      {props.loggedIn ? <div>{tmp()}</div> :

        <h2 className={s.auth}>Чтобы увидеть данный раздел, пожалуйста,
        <Link to='/login'> авторизуйтесь</Link>
        </h2>}
    </div>
  )
}

