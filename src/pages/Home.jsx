import React from 'react';
import CanvasShader from './CanvasShader';
import FeaturedPost from './FeaturedPost';
import './Home.css';
import './FeaturedPost.css';

class Home extends React.PureComponent {
  render() {
    return (
      <div className="home-container">
        <div className="home-about-container">
          <p className="home-about-text">
            Hi, I&apos;m Meguna! I&apos;m a computer science student at Tufts University.
            <br />
            My primary interest is full stack web development.
            <br />
            Check out some of the things I&apos;ve been playing around with recently!
          </p>
          <CanvasShader />
        </div>
        <div className="home-content-wrapper">
          <div className="content home-featured-post-container">
            <FeaturedPost
              slug="about-foodnotes"
              tagLine="featured work"
              big
            />
          </div>
          <div className="content home-featured-post-container">
            <FeaturedPost
              slug="behind-the-scenes"
            />
            <FeaturedPost
              slug="d3-maps"
            />
            <FeaturedPost
              slug="c4d-art"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
