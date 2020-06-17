import React, { useEffect } from 'react'
import { Loading } from '../LoadingComponent/LoadingComponent'


export default function News(props) {

  let { handlerRequest } = props

  useEffect(() => {
    handlerRequest()
  }, [handlerRequest])

  const tmp = () => {

    let { data, isFetching, message } = props

    if (isFetching) {
      return <Loading />

    } else if (message) {
      return <h2>{message}</h2>

    } else if (data[0]) {
      return (
        <>
          {data.map(i => {
            return (
              <div
                key={i.id}
                className="newsItem">
                <h2>{i.title}</h2>
                <p>{i.text}</p>
              </div>
            )
          })}
          <p className="count-news">Всего новостей: {data.length}</p>
        </>
      )
    }
  }

  return (
    <>
      {tmp()}
    </>
  )
}