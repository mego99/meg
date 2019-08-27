import React, { PureComponent } from 'react';
import './index.css';
import { Route, NavLink, Switch, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Post from './pages/Post';
import C4dPost from './pages/C4dPost';
import AppErrorBoundary from './pages/AppErrorBoundary';

class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <div className="app-container">
          <header className="app-header">
            <NavLink exact to="/">
              <h1 className="header-title">Meguna&apos;s Playground</h1>
            </NavLink>
            <ul className="nav-ul">
              <li className="nav-li"><NavLink to="/about">About</NavLink></li>
            </ul>
          </header>
          <AppErrorBoundary>
            <main>
              <Switch>
                <Route exact path="/about" component={About} />
                <Route path="/post/:slug" component={Post} />
                <Route exact path="/post/c4d-art" component={C4dPost} />
                <Route path="/" component={Home} />
              </Switch>
              {/* post-specific components */}
              <div className="content special-sidebar">
                <Route exact path="/post/c4d-art" component={C4dPost} />
              </div>
            </main>
          </AppErrorBoundary>
          <footer>
            <p>Copyright &copy; 2019 Meguna</p>
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
