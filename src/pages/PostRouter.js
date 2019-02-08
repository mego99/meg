import React from "react";
import {Switch,Route} from "react-router-dom";
import Post from './Post';
import About from './About';


class AllPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  render() {
    return (
      <Switch>
        <Route exact path='/allposts' component={About} />
        <Route path='/allposts/:id' component={Post} />
      </Switch>
    );
  }
}

export default AllPosts;
