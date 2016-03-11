import * as AuthActions from '../actions/auth'
import { bindActionCreators } from 'redux'

// Logs the user out
export function logoutUser() {
    return dispatch => {
        var actions = bindActionCreators(AuthActions, dispatch)
        actions.logoutRequest()
        localStorage.removeItem('id_token')
        actions.logoutReceived()
    }
}

export function loginUser(creds) {

    let config = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `username=${creds.username}&password=${creds.password}`
    }

    return dispatch => {
        // We dispatch requestLogin to kickoff the call to the API
        var actions = bindActionCreators(AuthActions, dispatch)
        actions.loginRequest()
        return fetch('http://localhost:3001/sessions/create', config)
            .then(response => response.json().then(user => ({ user, response })))
            .then(({ user, response }) => {
                if (!response.ok) {
                    // If there was a problem, we want to
                    // dispatch the error condition
                    actions.loginError(user.message)
                    return Promise.reject(user)
                }
                else {
                    // If login was successful, set the token in local storage
                    localStorage.setItem('id_token', user.id_token)

                    // Dispatch the success action
                    actions.loginReceived(user)
                }
            }).catch(err => console.log("Error: ", err))
    }
}
