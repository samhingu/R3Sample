import React, { Component } from 'react'

export default class Logout extends Component {
    handleLogoutClick(){
        const { logoutReceived, logoutRequest } = this.props
        logoutReceived()
    }
    render(){
        return <div>
            <button onClick={::this.handleLogoutClick}>Logout</button>
        </div>
    }
}
