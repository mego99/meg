import React, { Component } from "react";

class App extends Component {
  render() {
    return (
        <header class="app-header">
          <ul class ="nav-ul">
            <li class="nav-li"><a href=''>Home</a></li>
            <li class="nav-li"><a href=''>Work</a></li>
            <li class="nav-li"><a href=''>Links</a></li>
            <li class="nav-li"><a href="https://playground.meguna.co" target="_blank" >Playground</a></li>
          </ul>
          <ul class="nav-ul">
            <li class="nav-li" ><a href=''>Art</a></li>
            <li class="nav-li" ><a href=''>Code</a></li>
            <li class="nav-li" ><a href=''>Design</a></li>
          </ul>
        </header>
    );
  }
}

export default App;
