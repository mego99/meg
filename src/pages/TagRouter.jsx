import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Tag from './Tag';
import About from './About';

class AllPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  render() {
    return (
      <Switch>
        <Route exact path="/tag" component={About} />
        <Route path="/tag/:tag" component={Tag} />
      </Switch>
    );
  }
}

export default AllPosts;
