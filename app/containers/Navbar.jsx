import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as AuthActions from '../actions/auth'

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
        actions: bindActionCreators(AuthActions, dispatch)
    }
}
class Navbar extends Component {
  render() {
    const { isAuthenticated, errorMessage, actions } = this.props
    return (
        <div>
            {!isAuthenticated && <Login errorMessage={errorMessage} onLoginClick={ creds => actions.login(creds) } /> }
            {isAuthenticated && <Logout onLogoutClick={ () => actions.logout() } />}        
           </div>
    )
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar)