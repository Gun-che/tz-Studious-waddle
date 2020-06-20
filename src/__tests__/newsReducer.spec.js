import { newsReducer, initState } from '../reducers/newsReducer';
import {
  GET_NEWS_SUCCESS,
  GET_NEWS_REQUEST,
  GET_NEWS_FAILURE
} from '../actions/NewsAction';

describe('news reducer', () => {

  it(GET_NEWS_REQUEST, () => {
    const action = {
      type: GET_NEWS_REQUEST,
    }

    expect(newsReducer(initState, action)).toEqual({
      ...initState,
      isFetching: true,
      message: '',
    })

  })

  it(GET_NEWS_SUCCESS, () => {
    const action = {
      type: GET_NEWS_SUCCESS,
      payload: [1, 2]
    }

    const initState = {
      isFetching: true,
      data: [],
      message: ''
    }

    expect(newsReducer(initState, action)).toEqual({
      ...initState,
      isFetching: false,
      data: action.payload,
    })

  })

  it(GET_NEWS_FAILURE, () => {
    const action = {
      type: GET_NEWS_FAILURE,
      payload: 'err'
    }

    const initState = {
      isFetching: true,
      data: [],
      message: ''
    }

    expect(newsReducer(initState, action)).toEqual({
      ...initState,
      isFetching: false,
      message: action.payload,
    })
  })


  it('GET_NEWS_REQUEST after error', () => {
    const action = {
      type: GET_NEWS_REQUEST,
    }

    const initState = {
      isFetching: false,
      data: [],
      message: 'err'
    }

    expect(newsReducer(initState, action)).toEqual({
      ...initState,
      isFetching: true,
      message: '',
    })

  })

  it('should return the initial state', () => {
    expect(newsReducer(undefined, {})).toEqual(initState)
  })
})