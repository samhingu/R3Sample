import React, {Component} from 'react';
import { Link } from 'react-router'

export default class Header extends Component {
    render(){
        return (
            <header>
                <nav>
                    <div className="wrapper">
                        <div className="nav-wrapper"> 
                            <a href="#" className="brand-logo">  </a>
                            <ul id="nav-menu" className="right">
                                <li><Link to="/todo"><i className="fa fa-user-secret left"></i>Admin</Link></li>
                                <li><Link to="/contact"><i className="fa fa-user-users left"></i>Leads</Link></li>
                                <li><Link to="/about"><i className="fa fa-user-calendar left"></i>Events</Link></li>
                                <li><Link to="/contact"><i className="fa fa-user-bullhorn left"></i>Complaint</Link></li>
                                <li><Link to="/about"><i className="fa fa-user-clipboard left"></i>Survey</Link></li>
                                <li><Link to="/contact"><i className="fa fa-user-line-chart left"></i>Reports</Link></li>
                            </ul>
                            <a href="#" data-activates="nav-menu" className="button-collapse"><i className="material-icons">menu</i></a> 
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
};
