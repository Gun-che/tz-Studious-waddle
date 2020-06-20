import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import expect from 'expect'

import {
  GET_NEWS_REQUEST,
  GET_NEWS_SUCCESS,
  GET_NEWS_FAILURE,
  handlerNewsRequest
} from '../actions/NewsAction'
import { API_ROOT } from '../utils/API'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('NewsAction', () => {

  describe('async actions', () => {

    afterEach(() => {
      fetchMock.reset()
      fetchMock.restore()
    })

    it('creates GET_NEWS_REQUEST when fetcing news has been done', () => {
      fetchMock.getOnce(`${API_ROOT}/news`, {
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: {
          data: [1, 2],
          status: 'ok',
        }
      })

      const expectedAction = [
        {
          type: GET_NEWS_REQUEST,
        },
        {
          type: GET_NEWS_SUCCESS,
          payload: [1, 2],
        },
      ]

      const store = mockStore({})

      return store.dispatch(handlerNewsRequest())
        .then(() => {
          expect(store.getActions()).toEqual(expectedAction)
        })

    })

    it('creates GET_NEWS_REQUEST when fetcing news has been error', () => {
      fetchMock.getOnce(`${API_ROOT}/news`, {
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: {
          message: 'error',
          status: 'err',
        }
      })

      const expectedAction = [
        {
          type: GET_NEWS_REQUEST,
        },
        {
          type: GET_NEWS_FAILURE,
          payload: 'error',
        },
      ]

      const store = mockStore({})

      return store.dispatch(handlerNewsRequest())
        .then(() => {
          expect(store.getActions()).toEqual(expectedAction)
        })

    })
  })
})


