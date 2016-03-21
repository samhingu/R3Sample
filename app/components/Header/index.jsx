import React, {Component} from 'react';
import { Link } from 'react-router'

export default class Header extends Component {
    getAppLinks(isAuthenticated){
        if(!isAuthenticated){
            return
        }
            
        return <div className="left menu">
            <Link className="item" to="/todo">Admin</Link>
            <Link className="item" to="/leads">lead</Link>
            <Link className="item" to="/about">about</Link>
            <Link className="item" to="/contact">Contact</Link>
            <Link className="item" to="/about">about</Link>
            <Link className="item" to="/contact">contact</Link>
            </div>
    }
    render(){
        const { isAuthenticated } = this.props
        return (
            <header>
                <nav>
                 <div className="ui large top fixed hidden menu">
                    {this.getAppLinks(isAuthenticated)}
                    <div className="right menu">
                    <div className="item">
                        <Link className="ui primary button" to="/about">{isAuthenticated ? 'Log out': 'Log in'}</Link>
                    </div>
                    </div>
                  </div>
                </nav>
            </header>
        )
    }
}


