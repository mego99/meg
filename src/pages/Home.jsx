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
          Hi, I&apos;m Meguna! I&apos;m a computer science student at Tufts
          University.
            {' '}
            <br />
            {' '}
My primary interest is full stack web
          development.
            {' '}
            <br />
            {' '}
Here you can check out some of the things I&apos;ve
          been playing around with recently!
          </p>
          <CanvasShader />
        </div>
        <div className="home-content-wrapper">
          <div className="content home-featured-post-container">
            <FeaturedPost
              postId="about-foodnotes"
              tagLine="featured work"
            />
          </div>
          <div className="content home-featured-post-container">
            <FeaturedPost
              postId="behind-the-scenes"
            />
            <FeaturedPost
              postId="d3-maps"
            />
            <FeaturedPost
              postId="c4d-art"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
