import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { handlerNewsRequest } from '../actions/NewsAction';

import { Loading } from '../components/LoadingComponent/LoadingComponent'

import News from '../components/News/News';

export function NewsContainer(props) {
  let { handlerRequest } = props

  useEffect(() => {
    handlerRequest()
  }, [handlerRequest])

  const tmp = () => {

    let { data, isFetching, message } = props

    if (isFetching) {
      return <Loading />

    } else if (message) {
      return <h2>{message}</h2>

    } else if (data.length) {
      return <News data={data} />
    }
  }

  return <div>{tmp()}</div>
}

NewsContainer.propTypes = {
  data: PropTypes.array.isRequired,
  message: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handlerRequest: PropTypes.func.isRequired,
}

const mapStateToProps = store => ({
  data: store.news.data,
  isFetching: store.news.isFetching,
  message: store.news.message,
})

const mapDispatchToProps = dispatch => ({
  handlerRequest: () => dispatch(handlerNewsRequest()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer)