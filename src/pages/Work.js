import React, { Component } from "react";
import './PostList.css';
import PostList from './PostList';

class Work extends React.Component {
  componentDidMount() {
    document.title = 'Meguna | Work';
  }

  render() {
    return (
      <div className="content">
        <h1>Recent Work</h1>
          <PostList postlistorigin='/api/getnewposts'></PostList>
      </div>
    );
  }
}

export default Work;
