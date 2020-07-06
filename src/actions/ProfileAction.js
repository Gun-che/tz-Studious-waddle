import API from '../utils/API'
import { messages } from '../utils/messages'

export const GET_USER_INFO_REQUEST = 'GET_USER_INFO_REQUEST';
export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS';
export const GET_USER_INFO_FAILURE = 'GET_USER_INFO_FAILURE';


export function handlerUserInfoRequest(id) {
  return async function (dispatch) {

    dispatch({
      type: GET_USER_INFO_REQUEST,
    })

    let info = await API.get(`/user-info/${id}/`)

    if (info.status !== 200) {
      console.error(info)
      dispatch({
        type: GET_USER_INFO_FAILURE,
        payload: {
          message: messages.fetchError
        }
      })

    } else if (info.data.status === 'err') {
      console.log(messages[info.data.message]);
      dispatch({
        type: GET_USER_INFO_FAILURE,
        payload: {
          message: messages[info.data.message],
        }
      })

    } else if (info.data.status === 'ok') {
      console.log(`ok:)`)
      dispatch({
        type: GET_USER_INFO_SUCCESS,
        payload: {
          data: info.data.data
        }
      })

    } else {
      console.log(messages.baseError)
      dispatch({
        type: GET_USER_INFO_FAILURE,
        payload: {
          message: messages.baseError
        }
      })
    }
  }
}
