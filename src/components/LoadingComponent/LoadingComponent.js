import React from 'react'
import * as s from './LoadingComponent.module.scss'
import img from './loading.gif'

export const LoadingComponent = <div className={s.fullWrap}>
  <img className={s.loading} src={img} alt="loading" />
</div>

export function Loading(props) {
  return (<div className={s.fullWrap}>
    <img className={s.loading} src={img} alt="loading" />
  </div>)
}


export function LoadingThin(props) {
  return (<div className={s.wrap}>
    <img className={s.loading} src={img} alt="loading" />
  </div>)
}