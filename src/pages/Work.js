import React, { Component } from "react";
import {Route,NavLink,HashRouter} from "react-router-dom";
import Post from './Post';
import './Work.css';

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch('/newposts')
      .then(response => response.json()) //resolve promise by linking to next .then
      .then(parsedData => {
        console.log(parsedData);
        this.setState({posts: parsedData});
      })

  }

  adjustDate(date) {
    let monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
    let t = date.split(/[- :TZ]/);
    let d = new Date(Date.UTC(t[0], t[1]-1, t[2], t[3], t[4], t[5]));
    console.log(d);
    let dateOptions = { month:'long', day:'numeric', year:'numeric', timeZone:'Asia/Tokyo' };
    return d.toLocaleDateString('en-US', dateOptions);
  }

  getPosts() {
    console.log(this.state.posts);
    let posts = this.state.posts;
    let date = this.adjustDate;
    let newarr =  Object.keys(posts).map(function(x,i) {
          return  <div key={i} className={"post-container " +i}>
                    <span className="post-tags">{posts[x].tags}</span>
                    <p>
                      <NavLink to={"/posts/" + posts[x].id} className="post-title">{posts[x].title}</NavLink>
                      <span className="post-date">{date(posts[x].create_time)}</span>
                    </p>
                    <Route exact path={"/posts/" + posts[x].id} component={Post} />
                  </div>;
      })
    return newarr;
  }

  render() {
    return (
      <HashRouter>
      <div>
        <h2>Work</h2>
          <div>{this.getPosts()}</div>
      </div>
      </HashRouter>
    );
  }
}

export default Work;
