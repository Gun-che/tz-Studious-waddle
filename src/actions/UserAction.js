import API from '../utils/API'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'; export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'; export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const EXIT = 'EXIT'

export function handlerLogin(login, pass) {
  return async function (dispatch) {

    dispatch({
      type: LOGIN_REQUEST,
    })

    let res = await API.post('/validate/', {
      email: login,
      password: pass,
    })

    if (res.data.status === 'ok') {
      console.log('ok!')
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('userId', res.data.data.id);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: { login: login, id: res.data.data.id }
      })

    } else if (res.status !== 200) {
      console.log(res.status)

      dispatch({
        type: LOGIN_FAILURE,
        payload: {
          message: 'Ошибка загрузки'
        }
      })

    } else if (res.data.status === 'err') {
      console.log('not ok:(')

      dispatch({
        type: LOGIN_FAILURE,
        payload: {
          message: `Имя пользователя или пароль введены не верно (${res.data.message})`
        }
      })
    }
  }
}

export function handlerExit() {

  return function (dispatch) {
    localStorage.setItem('loggedIn', 'false');
    localStorage.setItem('userId', 0);

    dispatch({
      type: EXIT,
    })
  }
}
