import React, { PureComponent } from 'react';
import './index.css';
import { Route, NavLink, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Post from './pages/Post';

class App extends PureComponent {
  render() {
    return (
      <div className="app-container">
        <header className="app-header">
          <NavLink exact to="/" activeClassName="title-active">
            <h1 className="header-title">Meguna&apos;s Playground</h1>
          </NavLink>
          <ul className="nav-ul">
            <li className="nav-li"><NavLink exact to="/">Home</NavLink></li>
            <li className="nav-li"><NavLink to="/about">About</NavLink></li>
          </ul>
        </header>
        <main>
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/" component={Home} />
            <Route path="/post/:id" component={Post} />
          </Switch>
        </main>
        <footer>
          <p>Copyright &copy; 2019 Meguna</p>
        </footer>
      </div>
    );
  }
}

export default App;
