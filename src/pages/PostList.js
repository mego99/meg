import React from "react";
import {Link} from "react-router-dom";
import './PostList.css';
import About from './About';
import TagRouter from './TagRouter.js';

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
    let tagsArr = tags.split(" ");
    let output = Object.keys(tagsArr).map(function(x) {
      return <Link to={`/tag/${tagsArr[x]}`} key={x} className="tag">{tagsArr[x]}</Link>
    });
    return output;
  }

  getImage(i) {
    let imageData, imageDescription;
    let baseStr = 'data:image/jpeg;base64,';

    fetch(`/api/getpostmainimage/${i}`)
      .then(
        response => response.json()
      )
      .then(parsedData => {
        imageData = parsedData[0].image.data;
        imageDescription = parsedData[0].description;

        let base64 = btoa(
          new Uint8Array(imageData)
          .reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
        try {
          return <img className="post-image" src={baseStr + base64} alt={imageDescription}></img>;
        }
        catch(e) {
          return "error!" + e;
        }
      });
  }

  getPosts() {
    let posts = this.state.posts;
    let date = this.adjustDate;
    let parseTags = this.parseTags;
    let getImage = this.getImage;

    let newarr =  Object.keys(posts).map(function(x,i) {

      return  <div key={i} className={"post-container " +i}>
                {/*<img src={`${process.env.PUBLIC_URL}/header-images/${posts[x].image_link}-25.png`} className="post-thumb"/>*/}
                <div className="post-infobox">
                  <div className="post-tags">{parseTags(posts[x].tags)}</div>
                  <Link to={`/allposts/${posts[x].id}`} className="post-title">{posts[x].title}</Link>
                  <p className="post-date">{date(posts[x].create_time)}</p>
                </div>

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
