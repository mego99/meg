import React from "react";
import './PostList.css';
import ArtPostList from './ArtPostList';

class Art extends React.Component {
  componentDidMount() {
    document.title = 'Meguna | Art';
  }

  render() {
    return (
      <div>
          <ArtPostList postlistorigin='/api/getartposts'></ArtPostList>
      </div>
    );
  }
}

export default Art;
