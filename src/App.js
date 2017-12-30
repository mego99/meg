import ReactDOM from 'react-dom';
import React, { Component } from "react";
import "./index.css";
import {Route,NavLink,Switch} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import AllPosts from './pages/AllPosts';
import EditPost from './pages/EditPost';

class App extends Component {
  render() {
    return (
        <div>
          <header className="app-header">
            <ul className="nav-ul">
              <li className="nav-li"><NavLink to="/">Home</NavLink></li>
              <li className="nav-li"><NavLink to="/work">Work</NavLink></li>
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
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/work" component={Work}/>
              <Route path="/allposts" component={AllPosts}/>
              <Route path="/editpost" component={EditPost}/>
            </Switch>
          </div>
        </div>
    );
  }
}

export default App;
