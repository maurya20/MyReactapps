import React, { Component } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import { MemoryRouter, Route} from "react-router-dom";
import Home from "./components//Home";
import About from "./components//About";
import Gallery from './components//Gallery'
import Signup from "./components/Signup";


class App extends Component {
  render() {
    return (
      <div>
        <MemoryRouter>
        <Header />

       
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/signup" component={Signup} />
            
          
        </MemoryRouter>
      
        <Footer />
      </div>
    )
  }
}

export default App
