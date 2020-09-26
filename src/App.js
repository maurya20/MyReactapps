import React, { Component } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import { BrowserRouter, Route, NavLink} from "react-router-dom";
import Home from "./components//Home";
import About from "./components//About";
import Gallery from './components//Gallery'
import Signup from "./components/Signup";


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Header />

       
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/signup" component={Signup} />
            
          <NavLink to={'/'}>Home1</NavLink>
           
          <NavLink to={'/about'}>Home2</NavLink>
        </BrowserRouter>
      
        <Footer />
      </div>
    )
  }
}

export default App
