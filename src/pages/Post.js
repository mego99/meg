import React, { Component } from "react";
import {Route,NavLink,HashRouter} from "react-router-dom";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch('/posts/:id')
      .then(response => response.json())
      .then(parsedData => {
        console.log(parsedData);
        this.setState({posts: parsedData});
      })

  }

  getPosts() {
    console.log(this.state.posts);
    let posts = this.state.posts;
    let newarr =  Object.keys(posts).map(function(x,i) {
          return <div key={i}>
                  <a href="">{posts[x].title}</a>
                 </div>;
      })
    return newarr;
  }

  render() {
    return (
      <div>
        <h2>Work</h2>
          <div>{this.getPosts()}</div>
      </div>
    );
  }
}

export default Post;
