import {
  GET_USER_INFO_FAILURE,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_REQUEST
} from '../actions/ProfileAction'

const initState = {
  isFetching: false,
  data: {},
  message: '',
}

export function profileReducer(state = initState, action) {

  switch (action.type) {

    case GET_USER_INFO_REQUEST:
      return {
        ...state,
        isFetching: true,
        message: '',
      }

    case GET_USER_INFO_SUCCESS:
      return {
        ...state,
        isFetching: false,
        message: '',
        data: action.payload.data,
      }

    case GET_USER_INFO_FAILURE:
      return {
        ...state,
        isFetching: false,
        message: action.payload.message,
      }

    default:
      return state;
  }
}