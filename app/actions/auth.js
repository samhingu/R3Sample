import * as types from '../constants/AuthActionTypes'
//import fetch from 'isomorphic-fetch'

const apiUrl = __API_URL__
const authApiUrl = apiUrl + 'auth'
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

export const login = (user) => {
    return (dispatch, getState) => {
        dispatch(loginRequest())
        setTimeout(function() {
            fetch(authApiUrl, { headers: { 'Accept': 'application/json' } })
                .then(checkStatus)
                .then(parseJSON)
                .then(data => { dispatch(loginSuccess(data)); })
                .catch(error => { dispatch(loginError(error.message)) })
        }, 2000)
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
        setTimeout(function() {
            localStorage.removeItem('id_token')
            dispatch(logoutSuccess())
        }, 2000)
    }
}