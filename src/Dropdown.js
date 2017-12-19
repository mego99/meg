import React, { Component } from "react";
import ReactDOM from 'react-dom';
import {Route,NavLink,HashRouter} from "react-router-dom";


class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.state = {
      isVisible: false
    };
  }

  toggleDropdown() {
    let dropdownState = !this.state.isVisible;
    this.setState({
      isVisible: dropdownState
    })
  }

  render() {
    let dropdown;
    if(this.state.isVisible) {
      dropdown =
      <div>
        <li className="nav-li" ><NavLink to="/">Art</NavLink></li>
        <li className="nav-li" ><NavLink to="/">Code</NavLink></li>
        <li className="nav-li" ><NavLink to="/">Design</NavLink></li>
      </div>
    } else {
      dropdown = "";
    }
    return (
      <ul className="nav-ul" onClick={this.toggleDropdown}>
        {dropdown}
      </ul>
    )
  }
}

ReactDOM.render(
  <Dropdown />,
      document.getElementById('dropdown')
);
