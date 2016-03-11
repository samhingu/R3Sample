import React,{ Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as AuthActions from '../actions/auth';
import Login from '../components/Login';
import Logout from '../components/Logout';

const mapStateToProps = (state) => {
    const { isAuthenticated, errorMessage } = state.auth
    return {
        isAuthenticated,
        errorMessage        
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(AuthActions, dispatch)
    }
}

class Navbar extends Component {
  render() {
    const { isAuthenticated, errorMessage, actions } = this.props
    const { loginRequest, loginReceived, loginError, logoutRequest, logoutReceived } = actions;
    return <div>
            {!isAuthenticated && <Login errorMessage={errorMessage} loginRequest={loginRequest} loginReceived={loginReceived} loginError={loginError}  /> }
            {isAuthenticated && <Logout logoutReceived={logoutReceived} logoutRequest={logoutRequest}  />}        
           </div>
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar)