import * as types from '../constants/LeadActionTypes'

const initialState = {
    isFetching: false,
    errorMessage: '',
    isAuthenticated: localStorage.getItem('id_token') ? true : true,
    userName: localStorage.getItem('username') ? localStorage.getItem('username') : ''
}


const auth = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_REQUEST:
            return { ...state, isFetching: true, errorMessage: '' }
        case types.LOGIN_SUCCESS:
            return {...state, isFetching: false, isAuthenticated: true, userName: localStorage.getItem('username') ? localStorage.getItem('username') : '' }
        case types.LOGIN_ERROR:
            return {...state, isFetching: false, errorMessage: action.message }
        case types.LOGOUT_REQUEST:
            return { ...state, isFetching: true, errorMessage: '' }
        case types.LOGOUT_SUCCESS:
            return {...state, isFetching: false, isAuthenticated: false }
        default:
            return state
    }
}
export default auth