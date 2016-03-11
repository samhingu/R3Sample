import { createAction } from 'redux-actions'

export const loginRequest = createAction('login request')
export const loginReceived = createAction('login received')
export const loginError = createAction('login error')

export const logoutRequest = createAction('logout request')
export const logoutReceived = createAction('logout received')
