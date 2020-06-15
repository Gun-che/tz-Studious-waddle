export const LOGIN_REQUEST = 'LOGIN_REQUEST'; export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'; export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const EXIT = 'EXIT'

export function handlerLogin(login, pass) {
  return function (dispatch) {
    dispatch({
      type: LOGIN_REQUEST,
    })

    if (login === 'login' && pass === '12345') {
      localStorage.setItem('loggedIn', true);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { login, pass }
      })
    } else {
      dispatch({
        type: LOGIN_FAILURE,
        payload: {
          message: 'Имя пользователя или пароль введены не верно'
        }
      })
    }
  }
}

export function handlerExit() {
  return function (dispatch) {
    localStorage.setItem('loggedIn', false);
    dispatch({
      type: EXIT,

    })
  }
}
