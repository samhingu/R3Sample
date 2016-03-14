import React,{ Component } from 'react'
import { connect } from 'react-redux'

import { loginUser, logoutUser } from '../apis/auth'

import Login from '../components/Login'
import Logout from '../components/Logout'

const mapStateToProps = (state) => {
    const { isAuthenticated, errorMessage } = state.auth
    return {
        isAuthenticated,
        errorMessage        
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }
}
class Navbar extends Component {
  render() {
    const { isAuthenticated, errorMessage, dispatch } = this.props
    return <div>
            {!isAuthenticated && <Login errorMessage={errorMessage}
             onLoginClick={ creds => dispatch(loginUser(creds)) } /> }
            {isAuthenticated && <Logout onLogoutClick={ creds => dispatch(logoutUser()) } />}        
           </div>
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar)