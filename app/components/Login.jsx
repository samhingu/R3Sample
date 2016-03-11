import React, { Component } from 'react'

export default class Login extends Component {
    handleLoginClick(){
        const {loginRequest, loginReceived, loginError } = this.props
        const { username, password } = this.refs
        loginRequest()
         return fetch('http://localhost:3001/sessions/create',{
            method: 'POST',
            headers: { 'Content-Type':'application/x-www-form-urlencoded' },
            body: `username=${username.value}&password=${password.value}`
        }).then(response =>
        response.json()
        .then(user => ({ user, response }))
      ).then(({ user, response }) =>  {
        if (!response.ok) {
          // If there was a problem, we want to
          // dispatch the error condition
          loginError(user.message)
          //return Promise.reject(user)
        }
        else {
          // If login was successful, set the token in local storage
          localStorage.setItem('id_token', user.id_token)
          
          // Dispatch the success action
          loginReceived(user)
        }
      }).catch(err => console.log("Error: ", err))
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
