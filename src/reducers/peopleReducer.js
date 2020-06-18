import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE
} from '../actions/PeoplesAction';

const initState = {
  isFetching: false,
  data: [null],
  message: null,
}

export const peopleReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return {
        ...state,
        isFetching: true,
        message: null,
        data: [...action.payload]
      }

    case GET_USERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: [...action.payload],
      }

    case GET_USERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        message: action.payload,
      }

    default:
      return state;
  }
} 