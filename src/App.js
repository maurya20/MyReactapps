import React, { Component } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components//Home";
import About from "./components//About";
import Gallery from './components//Gallery'
import Contact from "./components//Contact";


class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Header />

        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/contact" component={Contact} />
            
          </Switch>
        </Router>
      
        <Footer />
      </div>
    )
  }
}

export default App
