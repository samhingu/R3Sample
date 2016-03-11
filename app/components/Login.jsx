import React, { Component } from 'react'

export default class Login extends Component {
    handleLoginClick(){
        const { onLoginClick } = this.props;
        const { username, password } = this.refs
        const creds = {username: username.value, password: password.value};
        onLoginClick(creds)
    }
    render(){
        const { errorMessage } = this.props
        return <div>
            <input ref="username" type="text" />
            <input ref="password" type="text" />
            <button onClick={::this.handleLoginClick}>Login</button>
            { errorMessage && <p style={{color:'red'}}>{errorMessage}</p>
        }
        </div>
    }
}
