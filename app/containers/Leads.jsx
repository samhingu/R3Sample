import React,{ Component } from 'react'
import { connect } from 'react-redux'

import { getLeads, addLead, removeLead } from '../apis/leads'

import Login from '../components/Login'
import Logout from '../components/Logout'

const mapStateToProps = (state) => {
    const { leads, errorMessage } = state.leads
    const { isAuthenticated } = state.auth
    return {
        isAuthenticated,
        leads,
        errorMessage        
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }
}
class Leads extends Component {
    handleAddLeadClick(){
        const { dispatch } = this.props
        const {leadName} =this.refs
        dispatch(addLead(leadName.value))
    }
    handleRemoveLeadClick(e){
        const { dispatch } = this.props
        dispatch(removeLead(e.target.attributes["data-id"].value))
    }
    render() {
        const { isAuthenticated, leads, errorMessage,  dispatch } = this.props
        return <div>
                <ul>
                    {leads.map(lead => <li key={lead.id}>
                           <b>Id</b> {lead.id} <b>Name</b> {lead.name} <b>Event Count</b> {lead.events}
                           <button data-id={lead.id} onClick={::this.handleRemoveLeadClick} >x</button>
                        </li> 
                    )}
                </ul>
                <input ref="leadName" />
                {isAuthenticated && <button onClick={::this.handleAddLeadClick} >Add Leads</button>}
                {isAuthenticated && <button onClick={ () => dispatch(getLeads()) } >Get Leads</button>}        
            </div>
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Leads)