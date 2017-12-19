import React, { Component } from "react";

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch('/posts')
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
                  <p>{posts[x].title}</p>
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

export default Work;
