import React, { Component } from "react";
import CanvasShader from './CanvasShader.js';
import FeaturedPost from './FeaturedPost.js';
import './Home.css';

class Home extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("home-background",true);
    document.body.classList.toggle("page-background",false);
  };
  componentWillUnmount() {
    document.body.classList.toggle("home-background",false);
    document.body.classList.toggle("page-background",true);

  };

  render() {
    return (
      <div>
        <CanvasShader />
        <FeaturedPost postId="11" 
                      tagLine="featured work" 
                      catLabel="view other work"
                      catLink="/code"/>
        <FeaturedPost postId="15" 
                      tagLine="newest blog post" 
                      catLabel="view blogs"
                      catLink="/code"/>              
      </div>
    );
  }
}

export default Home
