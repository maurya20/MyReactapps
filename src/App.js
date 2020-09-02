import React, { Component } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Gallery from './components/Gallery'

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Gallery />
        <Footer />
      </div>
    )
  }
}

export default App
