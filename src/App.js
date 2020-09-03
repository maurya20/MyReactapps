import React, { Component } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Gallery from './components/Gallery'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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
