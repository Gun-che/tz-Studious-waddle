
export const GET_NEWS_REQUEST = 'GET_NEWS_REQUEST';
export const GET_NEWS_SUCCESS = 'GET_NEWS_SUCCESS';
export const GET_NEWS_FAILURE = 'GET_NEWS_FAILURE';

export const handlerNewsRequest = () => dispatch => {

  dispatch({
    type: GET_NEWS_REQUEST
  })

  return fetch('https://mysterious-reef-29460.herokuapp.com/api/v1/news', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
  })
    .then(res => res.json())
    .then(result => {
      console.log(result)

      if (result.status === 'ok') {

        dispatch({
          type: GET_NEWS_SUCCESS,
          payload: result.data,
        })

      } else if (result.status === 'err') {

        dispatch({
          type: GET_NEWS_FAILURE,
          payload: result.message,
        })
      } else {

        dispatch({
          type: GET_NEWS_FAILURE,
          payload: result
        })
        throw new Error('Something going wrong:(')
      }
    })
    .catch(console.log)
}
