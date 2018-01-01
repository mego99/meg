import React, { Component } from "react";
import './PostList.css';
import PostList from './PostList';

class Art extends React.Component {
  componentDidMount() {
    document.title = 'Meguna | Art';
  }

  render() {
    return (
      <div>
        <h1>Art</h1>
          <PostList postlistorigin='/api/getartposts'></PostList>
      </div>
    );
  }
}

export default Art;
