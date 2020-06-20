import { APIRandomuser } from '../utils/API';

export const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';

export const handlerUsersRequest = (amount, prevData = []) => {
  return async function (dispatch) {
    dispatch({
      type: GET_USERS_REQUEST,
      payload: prevData
    })

    try {

      let userData = await APIRandomuser.get('/', {
        params: {
          results: +amount,
        }
      });

      if (userData.status === 200) {
        dispatch({
          type: GET_USERS_SUCCESS,
          payload: [...prevData, ...userData.data.results]
        })

      } else {
        dispatch({
          type: GET_USERS_FAILURE,
          payload: userData
        })
      }
      return userData

    } catch (e) {
      console.log(e)
    }
  }
} 