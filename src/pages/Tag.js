import React, { Component } from "react";
import './PostList.css';
import PostList from './PostList';

class Code extends React.Component {
  componentDidMount() {
    let tagName = (this.props.location.pathname).split("/")[2];
    document.title = 'Meguna | Posts Tagged ' + tagName;
  }

  render() {
    return (
      <div>
        <h1>Code</h1>
          <PostList postlistorigin='/api/getposts/:tag'></PostList>
      </div>
    );
  }
}

export default Code;
