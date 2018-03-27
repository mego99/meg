import React, { Component } from "react";
import './PostList.css';
import ArtPostList from './ArtPostList';

class Art extends React.Component {
  componentDidMount() {
    document.title = 'Meguna | Art';
  }

  render() {
    return (
      <div>
        <h1>Art</h1>
          <ArtPostList postlistorigin='/api/getartposts'></ArtPostList>
      </div>
    );
  }
}

export default Art;
