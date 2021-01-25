import React, { Component } from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import { Switch, Route } from "react-router-dom";
import Skills from "./Components/Skills/Skills";
import About from "./Components/About/About";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";

class App extends Component {
  render() { 
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route  path="/" component={About} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/Project" component={Project} />
          <Route exact path="/Contact" component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default App;
