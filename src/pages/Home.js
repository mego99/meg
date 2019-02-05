import React, { Component } from "react";
import CanvasShader from './CanvasShader.js';
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
      </div>
    );
  }
}

export default Home
