import React, { Component } from "react";
import './PostList.css';
import PostList from './PostList';

class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: (this.props.location.pathname).split("/")[2]
    }
  }
  componentDidMount() {
    console.log(this.props.location.pathname);
    console.log((this.props.location.pathname).split("/")[2]);
    console.log(this.state.tag)
    document.title = 'Meguna | Posts Tagged ' + this.state.tag;
  }

  render() {
    console.log(this.state.tag);
    return (
      <div>
        <h1>Code</h1>
        <PostList postlistorigin={`/api/gettaggedposts/${this.state.tag}`}></PostList>
      </div>
    );
  }
}

export default Tag;
