import React from "react";
import {Link} from "react-router-dom";
import './ArtPostList.css';
import About from './About';
import TagRouter from './TagRouter.js';

class ArtPostList extends React.Component {
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
    let dateOptions = { month:'long', year:'numeric', timeZone:'Asia/Tokyo' };
    return d.toLocaleDateString('en-US', dateOptions);
  }

  parseTags(tags) {
    let tagsArr = tags.split(" ");
    let output = Object.keys(tagsArr).map(function(x) {
      return <Link to={`/tag/${tagsArr[x]}`} key={x} className="tag">{tagsArr[x]}</Link>
    });
    return output;
  }

  getPosts() {
    let posts = this.state.posts;
    let date = this.adjustDate;
    let parseTags = this.parseTags;
    let getImage = this.getImage;

    let newarr =  Object.keys(posts).map(function(x,i) {

      return  <div key={i} className="art-image-thumb-container">
                  <div className="art-post-title">
                    <p className="art-post-date">{date(posts[x].create_time)}</p>
                    <h3>{posts[x].title}</h3>
                  </div>
                  <Link to={`/allposts/${posts[x].id}`}>
                    {<img src={`/api/static/post-images/${posts[x].image_link}`} className="art-post-thumb"/>}
                  </Link>
              </div>;
    })
    return newarr;
  }

  render() {
    return (
      <div>
          <div className="art-post-container">{this.getPosts()}</div>
      </div>
    );
  }
}

export default ArtPostList;
