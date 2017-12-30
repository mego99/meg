import React, { Component } from "react";
import './Home.css';

class Home extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("home-background",true);
  };
  componentWillUnmount() {
    document.body.classList.toggle("home-background",false);
  };

  render() {
    return (
      <div>
        <h1>Meguna Okawa</h1>
        <p>Hi, I'm Meguna! Check out some of my work here. </p>

      </div>
    );
  }
}

export default Home
