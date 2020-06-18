import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { handlerExit } from '../actions/UserAction'
import App from '../components/App/App'



function AppContainer(props) {

  return (
    <App
      loggedIn={props.loggedIn}
      handlerExit={props.handlerExit}
      data={props.data}></App>
  );
}



const mapStateToProps = store => {
  return {
    loggedIn: store.user.loggedIn,
    data: store.people.data
  }
}


const mapDispatchToProps = dispatch => {
  return {
    handlerExit: () => dispatch(handlerExit())
  }
}


App.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  handlerExit: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

