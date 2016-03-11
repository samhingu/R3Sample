import { handleActions } from 'redux-actions'
const initialState = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('id_token') ? true : false,
    userName: localStorage.getItem('username') ? localStorage.getItem('username') : ''
}

export default handleActions({
    'login request'(state, action) {
        return Object.assign({}, state, {
            isFetching: true,
            isAuthenticated: false,
            errorMessage: ''
        })
    },
    'login received'(state, action) {
        return Object.assign({}, state, {
            isFetching: false,
            isAuthenticated: true,
            errorMessage: '',
            userName: localStorage.getItem('username') ? localStorage.getItem('username') : ''
        })
    },
    'login error'(state, action) {
        return Object.assign({}, state, {
            isFetching: false,
            isAuthenticated: false,
            errorMessage: action.payload
        })
    },
    'logout request'(state, action) {
         return Object.assign({}, state, {
            isFetching: true,
            isAuthenticated: true
        })
    },
    'logout received'(state, action) {
         return Object.assign({}, state, {
            isFetching: false,
            isAuthenticated: false
        })
    }    
}, initialState)
