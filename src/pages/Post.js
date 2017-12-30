import React, { Component } from "react";
import {Switch,Route} from "react-router-dom";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch(`/posts/${this.props.match.params.id}`)
      .then(
        response => response.json()
      )
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
                    <h1>{posts[x].title}</h1>
                    <p>{posts[x].content}</p>
                 </div>;
      })
    return newarr;
  }

  render() {
    return (
      <div>
          <div>{this.getPosts()}</div>
      </div>
    );
  }
}

export default Post;
