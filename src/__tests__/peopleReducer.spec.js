import { peopleReducer, initState } from '../reducers/peopleReducer'
import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE
} from '../actions/PeoplesAction'

describe('people reducer', () => {

  it(GET_USERS_REQUEST, () => {
    const action = {
      type: GET_USERS_REQUEST,
      payload: [1, 2, 3]
    }

    expect(peopleReducer(initState, action)).toEqual({
      ...initState,
      isFetching: true,
      message: null,
      data: [...action.payload]
    })

  })

  it(GET_USERS_SUCCESS, () => {
    const action = {
      type: GET_USERS_SUCCESS,
      payload: [1, 2, 3]
    }

    const initState = {
      isFetching: true,
      message: null,
      data: [...action.payload]
    }

    expect(peopleReducer(initState, action)).toEqual({
      ...initState,
      isFetching: false,
      data: [...action.payload],
    })

  })

  it(GET_USERS_FAILURE, () => {
    const action = {
      type: GET_USERS_FAILURE,
      payload: 'err'
    }

    const initState = {
      isFetching: true,
      data: [],
      message: null
    }

    expect(peopleReducer(initState, action)).toEqual({
      ...initState,
      isFetching: false,
      message: action.payload,
    })
  })


  it('GET_USERS_REQUEST after error', () => {
    const action = {
      type: GET_USERS_REQUEST,
      payload: [],
    }

    const initState = {
      isFetching: false,
      data: [],
      message: 'err'
    }

    expect(peopleReducer(initState, action)).toEqual({
      ...initState,
      isFetching: true,
      data: [],
      message: null,
    })

  })

  it('should return the initial state', () => {
    expect(peopleReducer(undefined, {})).toEqual(initState)
  })
})