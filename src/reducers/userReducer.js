import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/UserAction";

const initState = {
  name: "Unknown",
  surname: 'User',
  age: '18',
}

export function userReducer(state = initState, action) {
  return state;
}