import React from 'react';
import './C4dPost.css';

class C4dPost extends React.Component {
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
      <div className="c4d-container">
        <div className="c4d-image-wrapper">
          <img
            className="c4d-image"
            src="http://localhost:3005/static/space_1x.jpg"
            srcSet="http://localhost:3005/static/space_1x.jpg 1x,
              http://localhost:3005/static/space_2x.jpg 2x"
            alt="c4d"
          />
          <div className="c4d-img-info">
            <h4 className="c4d-info-title">Space</h4>
            <p className="c4d-info-desc">Dec 2016</p>
          </div>
        </div>
        <div className="c4d-image-wrapper">
          <img
            className="c4d-image"
            src="http://localhost:3005/static/grave_1x.jpg"
            srcSet="http://localhost:3005/static/grave_1x.jpg 1x,
              http://localhost:3005/static/grave_2x.jpg 2x"
            alt="c4d"
          />
          <div className="c4d-img-info">
            <h4 className="c4d-info-title">Grave</h4>
            <p className="c4d-info-desc">Feb 2018</p>
          </div>
        </div>
        <div className="c4d-image-wrapper">
          <img
            className="c4d-image"
            src="http://localhost:3005/static/play_1x.jpg"
            srcSet="http://localhost:3005/static/play_1x.jpg 1x,
              http://localhost:3005/static/play_2x.jpg 2x"
            alt="c4d"
          />
          <div className="c4d-img-info">
            <h4 className="c4d-info-title">Playground</h4>
            <p className="c4d-info-desc">Mar 2018</p>
          </div>
        </div>
        <div className="c4d-image-wrapper">
          <img
            className="c4d-image"
            src="http://localhost:3005/static/interlock_1x.jpg"
            srcSet="http://localhost:3005/static/interlock_1x.jpg 1x,
              http://localhost:3005/static/interlock_2x.jpg 2x"
            alt="c4d"
          />
          <div className="c4d-img-info">
            <h4 className="c4d-info-title">Interlock</h4>
            <p className="c4d-info-desc">Nov 2016</p>
          </div>
        </div>
        <div className="c4d-image-wrapper">
          <img
            className="c4d-image"
            src="http://localhost:3005/static/bridge_1x.jpg"
            srcSet="http://localhost:3005/static/bridge_1x.jpg 1x,
              http://localhost:3005/static/bridge_2x.jpg 2x"
            alt="c4d"
          />
          <div className="c4d-img-info">
            <h4 className="c4d-info-title">Dawn</h4>
            <p className="c4d-info-desc">Jan 2018</p>
          </div>
        </div>
      </div>
    );
  }
}

export default C4dPost;
