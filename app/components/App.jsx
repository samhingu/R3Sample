import React,{ Component } from 'react'

import About from './About'
import Header from './Header'
import Footer from './Footer'

export default class App extends Component {
  render() {
    const { children } = this.props
    return <div>
        <Header />
        <main>
            <div className="wrapper">
                { children || <About/> }
            </div>
        </main>
        <Footer />
    </div>
  }
}