import React, { Component } from "react";
import "./index.css";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <header class="app-header">
            <ul class ="nav-ul">
              <li class="nav-li"><NavLink to="/">Home</NavLink></li>
              <li class="nav-li"><NavLink to="/">Work</NavLink></li>
              <li class="nav-li"><NavLink to="/about">Links</NavLink></li>
              <li class="nav-li"><a href="https://playground.meguna.co" target="_blank" >Playground</a></li>
            </ul>
            <ul class="nav-ul">
              <li class="nav-li" ><NavLink to="/">Art</NavLink></li>
              <li class="nav-li" ><NavLink to="/">Code</NavLink></li>
              <li class="nav-li" ><NavLink to="/">Design</NavLink></li>
            </ul>
          </header>
          <div class="content">
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
