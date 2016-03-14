import { handleActions } from 'redux-actions'

const initialState = {
    leads: [],
    isFetchting: false,
    errorMessage: ''
}

export default handleActions({
    'get leads request'(state, action) {
        return Object.assign({}, state, {
            isFetching: true,
            errorMessage: '',
            leads: []
        })
    },
    'get leads success'(state, action) {
        return Object.assign({}, state, {
            isFetching: false,
            errorMessage: '',
            leads: action.payload
        })
    },
    'get leads error'(state, action) {
        return state;
    }

}, initialState)
