import * as types from '../constants/LeadActionTypes'

const initialState = {
    leads: [],
    isFetching: false,
    errorMessage: ''
}

const leads = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_LEADS_REQUEST:
            return { ...state, isFetching: true, errorMessage: '' }
        case types.GET_LEADS_SUCCESS:
            return {...state, isFetching: false, leads: action.leads }
        case types.GET_LEADS_ERROR:
            return {...state, isFetching: false, errorMessage: action.message }

        case types.ADD_LEAD_REQUEST:
            return { ...state, isFetching: true, errorMessage: '' }
        case types.ADD_LEAD_SUCCESS:
            return {...state, isFetching: false, leads: [...state.leads, action.lead] }
        case types.ADD_LEAD_ERROR:
            return {...state, isFetching: false, errorMessage: action.message }

        case types.REMOVE_LEAD_REQUEST:
            return { ...state, isFetching: true, errorMessage: '' }
        case types.REMOVE_LEAD_SUCCESS:
            return {...state, isFetching: false, leads: state.leads.filter(lead => lead.id !== action.id) }
        case types.REMOVE_LEAD_ERROR:
            return {...state, isFetching: false, errorMessage: action.message }

        default:
            return state
    }
}
export default leads
