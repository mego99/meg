import React from 'react';
import './About.css';

class About extends React.PureComponent {
  render() {
    return (
      <div className="content about-wrapper">
        <div className="about-text-wrapper">
          <p>
            Hi! I&apos;m Meguna and this is where I display some of my recent work.
          </p>
          <p>
            I&apos;m currently a sophomore at Tufts University studying computer science.
            I&apos;m originally from Tokyo, but I&apos;m in Medford, MA most of the time.
          </p>
          <p>
            Contact me by email
            <a href="mailto:megrivers99@gmail.com"> here</a>
            .
          </p>
        </div>
        <div className="about-dp-wrapper">
          <img
            className="about-dp"
            src="http://localhost:3005/static/dp_1x.jpg"
            srcSet="http://localhost:3005/static/dp_1x.jpg 1x,
              http://localhost:3005/static/dp_2x.jpg 2x"
            alt="profile"
          />
          <h4 className="links-title">Links</h4>
          <a href="https://github.com/meguna">
            <img
              src="http://localhost:3005/static/github.svg"
              className="about-links-logo"
              alt="github logo"
            />
            Github
          </a>
          <a href="https://dribbble.com/megrivers/">
            <img
              src="http://localhost:3005/static/dribbble.svg"
              className="about-links-logo"
              alt="dribbble logo"
            />
            Dribbble
          </a>
        </div>
      </div>
    );
  }
}

export default About;
