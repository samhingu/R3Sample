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
    render() {
        const { isAuthenticated, leads, errorMessage, isFetching, actions } = this.props
        return (<div>
        {!!leads.length &&
        <table className="ui orange table">
            <thead>
                <tr><th>Id</th>
                <th>Name</th>
                <th>Event Count</th>
                <th></th>
            </tr></thead>
            <tbody>
             {leads.map(lead =>
             <tr key={lead.id}>
                <td>{lead.id}</td>
                <td>{lead.title}</td>
                <td>{lead.order}</td>
                <td><button disabled={isFetching} onClick={() => actions.removeLead(lead.id)}>X</button></td>
                </tr>
             ) }
            </tbody>
         </table>}
         {!leads.length && <p>No Leads Found</p>}
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