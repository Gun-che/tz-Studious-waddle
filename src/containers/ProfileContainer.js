import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { handlerUserInfoRequest } from '../actions/ProfileAction';

import Profile from '../components/Profile/Profile';

function ProfileContainer(props) {

  return (
    <Profile
      data={props.data}
      isFetching={props.isFetching}
      message={props.message}
      handlerRequest={props.handlerRequest}
      loggedIn={props.loggedIn}
      login={props.login}
      userId={props.userId}
    />
  )

}

ProfileContainer.propTypes = {
  data: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  handlerRequest: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  userId: PropTypes.number.isRequired,
  login: PropTypes.string.isRequired
}

const mapStateToProps = store => {
  return {
    data: store.profile.data,
    isFetching: store.profile.isFetching,
    message: store.profile.message,
    loggedIn: store.user.loggedIn,
    userId: store.user.userId,
    login: store.user.login,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handlerRequest: id => dispatch(handlerUserInfoRequest(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)

