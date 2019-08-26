import React from 'react';
import CanvasShader from './CanvasShader';
import FeaturedPost from './FeaturedPost';
import './Home.css';
import './FeaturedPost.css';

class Home extends React.Component {
  componentDidMount() {
    document.body.classList.toggle('home-background', true);
    document.body.classList.toggle('page-background', false);
  }

  componentWillUnmount() {
    document.body.classList.toggle('home-background', false);
    document.body.classList.toggle('page-background', true);
  }

  render() {
    return (
      <div className="home-container">
        <div className="home-about-container">
          <p className="home-about-text">
          Hi, I'm Meguna! I'm a computer science student at Tufts
          University.
            {' '}
            <br />
            {' '}
My primary interest is full stack web
          development.
            {' '}
            <br />
            {' '}
Here you can check out some of the things I've
          been playing around with recently!
          </p>
          <CanvasShader />
        </div>
        <div className="home-content-wrapper">
          <div className="content home-featured-post-container">
            <FeaturedPost
              postId="11"
              tagLine="featured work"
              catLabel="view all work"
              catLink="/code"
            />
          </div>
          <div className="content home-featured-post-container">
            <FeaturedPost
              postId="12"
              tagLine="behind the scenes"
              catLabel="view all work"
              catLink="/code"
            />
            <FeaturedPost
              postId="20"
              tagLine="3d art"
              catLabel="view all blog posts"
              catLink="/code"
            />
            <FeaturedPost
              postId="20"
              tagLine="3d art"
              catLabel="view all blog posts"
              catLink="/code"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
