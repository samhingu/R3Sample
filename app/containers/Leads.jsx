import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as LeadActions from '../actions/leads'

import Login from '../components/Login'
import Logout from '../components/Logout'

const mapStateToProps = (state) => {
    const { isAuthenticated } = state.auth
    return {
        isAuthenticated,
        ...state.leads
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(LeadActions, dispatch)
    }
}
class Leads extends Component {
    handleAddLeadClick() {
        const { actions } = this.props
        const {leadName} = this.refs
        actions.addLead(leadName.value)
    }
    handleFileClick(e) {
        // debugger
        // e.preventDefault()
        // const { fields } = this.props
        // // convert files to an array
        // const files = [...e.target.files]
        // debugger
        // //fields.yourField.handleChange(files)
    }
    render() {
        const { isAuthenticated, leads, errorMessage, isFetching, actions } = this.props
        return (<div>
            <input ref="fileToGet"  type="file" onChange={:: this.handleFileClick} />
            <ul>
                {leads.map(lead => <li key={lead.id}>
                    <b>Id</b> {lead.id} <b>Name</b> {lead.title} <b>Event Count</b> {lead.order}
                    <button disabled={isFetching} onClick={() => actions.removeLead(lead.id)}>X</button>
                        </li>
                ) }
            </ul>
            <p style={{ color: 'red' }}>{errorMessage}</p>
            {isFetching && <p style={{ color: 'green' }}>Loading</p>}

            <input ref="leadName" />
            {isAuthenticated && <button onClick={:: this.handleAddLeadClick} disabled={isFetching}>Add Leads</button>}
            {isAuthenticated && <button onClick={ () => actions.getLeads() } disabled={isFetching} >Get Leads</button> }        
            </div >
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Leads)