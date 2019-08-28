import React from 'react';
import './C4dPost.css';

class C4dPost extends React.PureComponent {
  render() {
    return (
      <div className="c4d-container">
        <div className="c4d-image-wrapper">
          <img
            className="c4d-image"
            src="/api/static/space_1x.jpg"
            srcSet="/api/static/space_1x.jpg 1x,
              /api/static/space_2x.jpg 2x"
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
            src="/api/static/grave_1x.jpg"
            srcSet="/api/static/grave_1x.jpg 1x,
              /api/static/grave_2x.jpg 2x"
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
            src="/api/static/play_1x.jpg"
            srcSet="/api/static/play_1x.jpg 1x,
              /api/static/play_2x.jpg 2x"
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
            src="/api/static/interlock_1x.jpg"
            srcSet="/api/static/interlock_1x.jpg 1x,
              /api/static/interlock_2x.jpg 2x"
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
            src="/api/static/bridge_1x.jpg"
            srcSet="/api/static/bridge_1x.jpg 1x,
              /api/static/bridge_2x.jpg 2x"
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
