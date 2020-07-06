import React from 'react'
import * as s from './LoadingComponent.module.scss'
import img from './loading.gif'

export const LoadingComponent = <div className={s.fullWrap + ' anim-light'}>
  <img className={s.loading} src={img} alt="loading" />
</div>

export function Loading(props) {
  return (<div className={s.fullWrap + ' anim-light'}>
    <img className={s.loading} id="loading" src={img} alt="loading" />
  </div>)
}


export function LoadingThin(props) {
  return (<div className={s.wrap + ' anim-light'}>
    <img className={s.loading} src={img} alt="loading" />
  </div>)
}