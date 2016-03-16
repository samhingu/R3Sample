import * as types from '../constants/LeadActionTypes'
//import fetch from 'isomorphic-fetch'

const apiUrl = __API_URL__
const leadApiUrl = apiUrl + '/lead'
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
const getLeadsSuccess = (leads) => {
    return {
        type: types.GET_LEADS_SUCCESS,
        leads
    }
}
const getLeadsError = (message) => {
    return {
        type: types.GET_LEADS_ERROR,
        message
    }
}
const getLeadsRequest = () => {
    return {
        type: types.GET_LEADS_REQUEST
    }
}

export const getLeads = () => {
    return (dispatch, getState) => {
        dispatch(getLeadsRequest())
        setTimeout(function() {
            fetch(leadApiUrl, { headers: { 'Accept': 'application/json' } })
                .then(checkStatus)
                .then(parseJSON)
                .then(data => { dispatch(getLeadsSuccess(data)); })
                .catch(error => { dispatch(getLeadsError(error.message)) })
        }, 2000)
    }
}

const addLeadSuccess = (lead) => {
    return {
        type: types.ADD_LEAD_SUCCESS,
        lead
    }
}
const addLeadError = (message) => {
    return {
        type: types.ADD_LEAD_ERROR,
        message
    }
}
const addLeadRequest = () => {
    return {
        type: types.ADD_LEAD_REQUEST
    }
}

export const addLead = (text) => {
    return (dispatch, getState) => {
        dispatch(addLeadRequest())
        setTimeout(function() {
            fetch(leadApiUrl, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title: text })
            }).then(checkStatus).then(parseJSON)
                .then(data => { dispatch(addLeadSuccess(data)); })
                .catch(error => { dispatch(addLeadError(error.message)) })
        }, 2000)
    }
}

const removeLeadSuccess = (id) => {
    return {
        type: types.REMOVE_LEAD_SUCCESS,
        id
    }
}
const removeLeadError = (message) => {
    return {
        type: types.REMOVE_LEAD_ERROR,
        message
    }
}
const removeLeadRequest = () => {
    return {
        type: types.REMOVE_LEAD_REQUEST
    }
}

export const removeLead = (id) => {
    return (dispatch, getState) => {
        dispatch(removeLeadRequest())
        setTimeout(function() {
            fetch(leadApiUrl, {
                method: 'delete',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: id })
            }).then(checkStatus).then(data => { dispatch(removeLeadSuccess(id)); })
                .catch(error => { dispatch(removeLeadError(error.message)) })
        }, 2000)
    }
}