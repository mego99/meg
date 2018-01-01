import React, { Component } from "react";
import {Route,Link} from "react-router-dom";
import Post from './Post';
import './PostList.css';
import AllPosts from './AllPosts.js';
import About from './About';

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      postlistorigin: ''
    };
    this.parseTags = this.parseTags.bind(this);
  }

  componentDidMount() {
    fetch(this.props.postlistorigin)
      .then(function(response, error) {
        if (error) throw error;
        return response.json();
      }) //resolve promise by linking to next .then
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
    let dateOptions = { month:'long', day:'numeric', year:'numeric', timeZone:'Asia/Tokyo' };
    return d.toLocaleDateString('en-US', dateOptions);
  }

  parseTags(tags) {
    console.log(tags);
    let tagsArr = tags.split(" ");
    console.log(tagsArr);
    let output = Object.keys(tagsArr).map(function(x) {
      console.log(x);
      return <span key={x} className="tag">{tagsArr[x] }</span>
    });
    console.log(output);
    return output;
  }

  getPosts() {
    let posts = this.state.posts;
    let date = this.adjustDate;
    let parseTags = this.parseTags;

    let newarr =  Object.keys(posts).map(function(x,i) {
      return  <div key={i} className={"post-container " +i}>
                    <div className="post-tags">{parseTags(posts[x].tags)}</div>
                    <p>
                      <Link to={`/allposts/${posts[x].id}`} className="post-title">{posts[x].title}</Link>
                      <span className="post-date">{date(posts[x].create_time)}</span>
                    </p>
                  </div>;
    })
    return newarr;
  }

  render() {
    return (
      <div>
          <div>{this.getPosts()}</div>
      </div>
    );
  }
}

export default PostList;
