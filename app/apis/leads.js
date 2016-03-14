import * as LeadActions from '../actions/leads'
import { bindActionCreators } from 'redux'

export function getLeads(searchTerm) {

    let config = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `searchTerm=${searchTerm}`
    }

    return dispatch => {
        // We dispatch requestLogin to kickoff the call to the API
        var actions = bindActionCreators(LeadActions, dispatch)
        actions.getLeadsRequest()
        return fetch('http://localhost:3001/api/getLeads', config)
            .then(response => response.json().then(lead => ({ lead, response })))
            .then(({ lead, response }) => {
                if (!response.ok) {
                    // If there was a problem, we want to
                    // dispatch the error condition
                    actions.getLeadsError(lead.message)
                    return Promise.reject(leads)
                }
                else {
                    // Dispatch the success action
                    actions.getLeadsSuccess(lead)
                }
            }).catch(err => console.log("Error: ", err))
    }
}



export function addLead(leadName) {

    let config = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `leadName=${leadName}`
    }

    return dispatch => {
        // We dispatch requestLogin to kickoff the call to the API
        var actions = bindActionCreators(LeadActions, dispatch)
        actions.getLeadsRequest()
        return fetch('http://localhost:3001/api/addLead', config)
            .then(response => response.json().then(lead => ({ lead, response })))
            .then(({ lead, response }) => {
                if (!response.ok) {
                    // If there was a problem, we want to
                    // dispatch the error condition
                    actions.getLeadsError(lead.message)
                    return Promise.reject(leads)
                }
                else {
                    // Dispatch the success action
                    actions.getLeadsSuccess(lead)
                }
            }).catch(err => console.log("Error: ", err))
    }
}



export function removeLead(id) {

    let config = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `id=${id}`
    }

    return dispatch => {
        // We dispatch requestLogin to kickoff the call to the API
        var actions = bindActionCreators(LeadActions, dispatch)
        actions.getLeadsRequest()
        return fetch('http://localhost:3001/api/removeLead', config)
            .then(response => response.json().then(lead => ({ lead, response })))
            .then(({ lead, response }) => {
                if (!response.ok) {
                    // If there was a problem, we want to
                    // dispatch the error condition
                    actions.getLeadsError(lead.message)
                    return Promise.reject(leads)
                }
                else {
                    // Dispatch the success action
                    actions.getLeadsSuccess(lead)
                }
            }).catch(err => console.log("Error: ", err))
    }
}
