import API from '../utils/API'

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
      console.log('download error:(')
      dispatch({
        type: GET_USER_INFO_FAILURE,
        payload: {
          message: 'download error'
        }
      })

    } else if (info.data.status === 'err') {
      console.log(`invalid request:( (${info.data.message})`)
      dispatch({
        type: GET_USER_INFO_FAILURE,
        payload: {
          message: `invalid request:( (${info.data.message})`
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
      console.log('unknown error:(')
      dispatch({
        type: GET_USER_INFO_FAILURE,
        payload: {
          message: 'unknown error'
        }
      })
    }
  }
}
