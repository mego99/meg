import React from "react";
import './PostList.css';
import PostList from './PostList';

class Design extends React.Component {
  componentDidMount() {
    document.title = 'Meguna | Design';
  }

  render() {
    return (
      <div>
        <h1>Design</h1>
          <PostList postlistorigin='/api/getdesignposts'></PostList>
      </div>
    );
  }
}

export default Design;
