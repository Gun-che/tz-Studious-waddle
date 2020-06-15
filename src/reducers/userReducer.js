import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, EXIT } from "../actions/UserAction";

const initState = {
  success: false,
  isFetching: false,
  login: '',
  message: '',
  loggedIn: localStorage.getItem('loggedIn'),
}

export function userReducer(state = initState, action) {

  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state, isFetching: true, success: false, message: 'Loading...'
      }

    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        success: true,
        login: action.payload.login,
        message: '',
        loggedIn: true
      }

    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        success: false,
        message: action.payload.message,
      }
    case EXIT:
      return {
        ...initState,
        loggedIn: false
      }

    default:
      return state;
  }
}