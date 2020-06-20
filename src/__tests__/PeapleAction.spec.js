import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import expect from 'expect'
import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'

import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  handlerUsersRequest
} from '../actions/PeoplesAction'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const axiosMock = new AxiosMockAdapter(axios);


describe('UsersAction', () => {

  describe('async actions', () => {

    afterEach(() => {
      axiosMock.reset()
    })

    it('creates GET_USERS_REQUEST when fetcing news has been done', () => {
      const postResponse = {
        data: {
          result: [{}, {}],
        }
      }
      axiosMock.onGet(`https://randomuser.me/api/`)
        .reply(200, postResponse)

      const expectedAction = [
        {
          type: GET_USERS_REQUEST,
          payload: []
        },
        {
          type: GET_USERS_SUCCESS,
          payload: [{}, {}],
        },
      ]

      const store = mockStore({})

      store.dispatch(handlerUsersRequest(1, []))
        .then(() => {
          expect(store.getActions()).toEqual(expectedAction)
        })
    })

    it('creates GET_USERS_REQUEST when fetcing news has been error', () => {
      const postResponse = {
        error: 'error'
      }
      axiosMock.onGet(`https://randomuser.me/api/`)
        .reply(500, postResponse)

      const expectedAction = [
        {
          type: GET_USERS_REQUEST,
          payload: []
        },
        {
          type: GET_USERS_FAILURE,
          payload: postResponse
        },
      ]

      const store = mockStore({})

      store.dispatch(handlerUsersRequest(1, []))
        .then(() => {
          expect(store.getActions()).toEqual(expectedAction)
        })
    })
  })
})


