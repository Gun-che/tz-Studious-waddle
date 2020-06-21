import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { handlerUsersRequest } from '../actions/PeoplesAction'

import Users from '../components/Users/Users'

export const UserContainer = (props) => {

  return (
    <Users
      isFetching={props.isFetching}
      data={props.data}
      message={props.message}
      handlerRequest={props.handlerRequest}
    />
  )
}

UserContainer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
  handlerRequest: PropTypes.func.isRequired,
}

UserContainer.defaultProps = {
  message: null,
}

const mapStateToProps = (store) => ({
  isFetching: store.people.isFetching,
  data: store.people.data,
  message: store.people.message,
})

const mapDispatchToProps = (dispatch) => ({
  handlerRequest: (amount, prevData) => dispatch(handlerUsersRequest(amount, prevData))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)



