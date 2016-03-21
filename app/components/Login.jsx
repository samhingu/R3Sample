import React, { Component } from 'react'
import './login.css'
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
            <div className="ui middle aligned center aligned grid">
            <div className="column">
                <h2 className="ui teal image header">
                <img src="http://semantic-ui.com/examples/assets/images/logo.png" className="image" />
                <div className="content">
                    Log-in to your account
                </div>
                </h2>
                <form className="ui large form">
                <div className="ui stacked segment">
                    <div className="field">
                    <div className="ui left icon input">
                        <i className="user icon"></i>
                        <input ref="username" type="text" name="email" placeholder="E-mail address" />
                    </div>
                    </div>
                    <div className="field">
                    <div className="ui left icon input">
                        <i className="lock icon"></i>
                        <input ref="password" type="password" name="password" placeholder="Password" />
                    </div>
                    </div>
                    <div className="ui fluid large teal submit button" onClick={::this.handleLoginClick}>Login</div>
                </div>
                </form>
                {errorMessage && <div className="ui error message">{errorMessage}</div>}
                
            </div>
            </div>
        </div>
    }
}
