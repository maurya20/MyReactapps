import React, { Component } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <h3 className="container">
        M & M Technologies </h3>
        <p className="container">Company introduction Featured snippet from the web Simply put, your company profile is a professional introduction and aims to inform people (primarily prospective buyers and stakeholders) your products, services, and current status. A well written company profile is a great opportunity for your company to differentiate itself.</p>
        
        <Footer />
      </div>
    )
  }
}

export default App
