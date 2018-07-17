import ReactDOM from 'react-dom';
import React, { Component } from "react";
import "./index.css";
import {Route,NavLink,Switch} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Art from './pages/Art';
import Code from './pages/Code';
import Design from './pages/Design';
import PostRouter from './pages/PostRouter';
import EditPost from './pages/EditPost';
import NewPost from './pages/NewPost';
import Playground from './pages/Playground';
import PostList from './pages/PostList';
import TagRouter from './pages/TagRouter';
import ArtPostList from './pages/ArtPostList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postlistorigin: ''
    };
  }
  render() {
    return (
        <div>
          <header className="app-header">
            <h1 className="header-title"><mark>Meguna's Work</mark></h1>
            <ul className="nav-ul">
              <li className="nav-li"><NavLink exact to="/">Home</NavLink></li>
              <li className="nav-li"><NavLink to="/about">About</NavLink></li>
            </ul>
            <ul className="nav-ul" id="dropdown">
              <li className="nav-li"><NavLink to="/art">Art</NavLink></li>
              <li className="nav-li"><NavLink to="/code">Code</NavLink></li>
            </ul>
          </header>
          <main className="content">
            <Switch>
              <Route exact path="/about" component={About}/>
              <Route exact path="/work" component={Work}/>
              <Route exact path="/art" component={Art}/>
              <Route exact path="/code" component={Code}/>
              <Route exact path="/design" component={Design}/>
              <Route exact path="/" component={Home}/>
              <Route path="/allposts" component={PostRouter}/>
              <Route path="/editpost" component={EditPost}/>
              <Route path="/newpost" component={NewPost}/>
              <Route path="/playground" component={Playground}/>
              <Route path="/postlist" component={PostList}/>
              <Route path="/artpostlist" component={ArtPostList}/>
              <Route path="/tag" component={TagRouter}/>
            </Switch>
          </main>
          <footer>
            <p>Copyright &copy; 2018 Meguna</p>
          </footer>
        </div>
    );
  }
}

export default App;
