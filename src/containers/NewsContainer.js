import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { handlerNewsRequest } from '../actions/NewsAction';

import News from '../components/News/News';

function NewsContainer(props) {
  return (
    <News
      data={props.data}
      message={props.message}
      isFetching={props.isFetching}
      handlerRequest={props.handlerRequest}
    />
  )
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