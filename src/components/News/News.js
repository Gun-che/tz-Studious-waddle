import React from 'react'


export default function News(props) {
  let { data } = props
  return (
    <div className="anim">
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
      <strong className="count-news">Всего новостей: {data.length}</strong>
    </div>
  )
}