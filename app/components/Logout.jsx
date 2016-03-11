import React, { Component } from 'react'

export default class Logout extends Component {
    handleLogoutClick(){
        const { onLogoutClick } = this.props
        onLogoutClick()
    }
    render(){
        return <div>
            <button onClick={::this.handleLogoutClick}>Logout</button>
        </div>
    }
}
