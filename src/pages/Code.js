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
          <PostList postlistorigin='/api/getcodeposts'></PostList>
      </div>
    );
  }
}

export default Code;
