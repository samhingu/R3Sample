import React,{ Component } from 'react'
import { connect } from 'react-redux'

import About from './About'
import Header from './Header'
import Footer from './Footer'


const mapStateToProps = (state) => {
    const { isAuthenticated, errorMessage } = state.auth
    return {
        isAuthenticated        
    }
}

class App extends Component {
  render() {
    const { isAuthenticated, children } = this.props
    return <div>
        <Header isAuthenticated={isAuthenticated} />
        <div className="ui container">
                { children || <About/> }
        </div>
        {isAuthenticated && <Footer />}
    </div>
  }
}



export default connect(
    mapStateToProps
)(App)