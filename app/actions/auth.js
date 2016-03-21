import * as types from '../constants/AuthActionTypes'
//import fetch from 'isomorphic-fetch'

const apiUrl = __API_URL__
const authApiUrl = apiUrl + 'login'
const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
    }
}
const parseJSON = (response) => {
    return response.json()
}
const loginSuccess = (user) => {
    return {
        type: types.LOGIN_SUCCESS,
        user
    }
}
const loginError = (message) => {
    return {
        type: types.LOGIN_ERROR,
        message
    }
}
const loginRequest = () => {
    return {
        type: types.LOGIN_REQUEST
    }
}

export const login = (creds) => {
    return (dispatch, getState) => {
        dispatch(loginRequest())
            const config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(creds) 
            }
            fetch(authApiUrl, config)
                .then(checkStatus)
                .then(parseJSON)
                .then(data => {
                    localStorage.setItem('accessToken',data.accessToken)
                    localStorage.setItem('username',data.userName)
                    dispatch(loginSuccess(data))
                })
                .catch(error => { dispatch(loginError(error.message)) })
    }
}


const logoutSuccess = () => {
    return {
        type: types.LOGOUT_SUCCESS,
    }
}
const logoutRequest = () => {
    return {
        type: types.LOGOUT_REQUEST
    }
}
export const logout = () => {
    return (dispatch, getState) => {
        dispatch(loginRequest())
            localStorage.removeItem('accessToken')
            localStorage.removeItem('username')
            dispatch(logoutSuccess())
    }
}