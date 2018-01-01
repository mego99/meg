import React, { Component } from "react";
import './PostList.css';
import PostList from './PostList';

class Code extends React.Component {
  componentDidMount() {
    document.title = 'Meguna | Code';
  }

  render() {
    return (
      <div>
        <h1>Code</h1>
          <PostList postlistorigin='/api/getcodeposts'></PostList>
      </div>
    );
  }
}

export default Code;
