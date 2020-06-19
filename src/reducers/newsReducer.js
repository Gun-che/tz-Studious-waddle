import {
  GET_NEWS_REQUEST,
  GET_NEWS_SUCCESS,
  GET_NEWS_FAILURE
} from '../actions/NewsAction';

export const initState = {
  isFetching: false,
  data: [],
  message: ''
}

export function newsReducer(state = initState, action) {
  switch (action.type) {

    case GET_NEWS_REQUEST:
      return {
        ...state,
        isFetching: true,
        message: '',
      }

    case GET_NEWS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload
      }

    case GET_NEWS_FAILURE:
      return {
        ...state,
        isFetching: false,
        message: action.payload,
      }

    default:
      return state;
  }
}