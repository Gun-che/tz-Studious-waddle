import React from 'react'


export default function Home(props) {

  return (
    <div>
      <h2>Home</h2>
      <h3>Добро пожаловать на стартовую страницу React app after theory! </h3>
      <h4>На этом сайте использованы следующие библиотеки и технологии</h4>
      <ul>
        <li>React
      <ul>
            <li>JSX</li>
            <li>React hooks</li>
          </ul>
        </li>
        <li>Redux
      <ul>
            <li>Использованы все основные инструменты: Actions, Reducers, store, Provider, dispatch</li>
            <li>Redux Thunk</li>
          </ul>
        </li>
        <li>React Router
      <ul>
            <li>Использованны инструменты: Link, NavLink, Route, Switch, BrowserRouter, useRouteMatch, useParams</li>
            <li>использован стандартный и индексированный роутинг</li>
          </ul>
        </li>
        <li>AJAX
        <ul>
            <li>React Axios</li>
            <li>Fetch API</li>
          </ul>
        </li>
        <li>Тестирование
          <ul>
            <li>Jest</li>
            <li>Enzyme</li>
            <li>Fetch-mock, fetch-mock-store</li>
          </ul>
        </li>
        <li>Разделение кода с помощью @loadable/component</li>
      </ul>
      <h4>Проблемные места</h4>
      <ul>
        <li>Не полное понимание концепций React hooks</li>
        <li>Расположение роутов в приложении(при индексированном роутинге)</li>
        <li>Тестирование React hook'ов (прозванивание state)</li>
        <li>Тестирование Routera (Error: Uncaught [TypeError: Cannot read property 'location' of undefined])</li>
      </ul>
    </div>
  )
}