import ReactDOM from 'react-dom';
import React, { Component } from "react";
import "./index.css";
import {Route,NavLink,HashRouter} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
// import Dropdown from "./Dropdown";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <header className="app-header">
            <ul className="nav-ul">
              <li className="nav-li"><NavLink to="/">Home</NavLink></li>
              <li className="nav-li"><NavLink to="/">Work</NavLink></li>
              <li className="nav-li"><NavLink to="/about">Links</NavLink></li>
              <li className="nav-li"><a href="https://playground.meguna.co" target="_blank" >Playground</a></li>
            </ul>
            <ul className="nav-ul" id="dropdown">
              <li className="nav-li" ><NavLink to="/">Art</NavLink></li>
              <li className="nav-li" ><NavLink to="/">Code</NavLink></li>
              <li className="nav-li" ><NavLink to="/">Design</NavLink></li>
            </ul>
          </header>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
