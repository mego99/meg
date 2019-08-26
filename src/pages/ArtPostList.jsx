import React from 'react';
import { Link } from 'react-router-dom';
import './ArtPostList.css';

class ArtPostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      postlistorigin: '',
    };
    this.parseTags = this.parseTags.bind(this);
  }

  componentDidMount() {
    fetch(this.props.postlistorigin)
      .then((response, error) => {
        if (error) throw error;
        return response.json();
      }) // resolve promise by linking to next .then
      .then((parsedData) => {
        this.setState({ posts: parsedData });
      });
  }

  adjustDate(date) {
    const t = date.split(/[- :TZ]/);
    const d = new Date(Date.UTC(t[0], t[1] - 1, t[2], t[3], t[4], t[5]));
    const dateOptions = { month: 'long', year: 'numeric', timeZone: 'Asia/Tokyo' };
    return d.toLocaleDateString('en-US', dateOptions);
  }

  parseTags(tags) {
    const tagsArr = tags.split(' ');
    const output = Object.keys(tagsArr).map(x => <Link to={`/tag/${tagsArr[x]}`} key={x} className="tag">{tagsArr[x]}</Link>);
    return output;
  }

  getPosts() {
    const { posts } = this.state;
    const date = this.adjustDate;

    const newarr = Object.keys(posts).map((x, i) => (
      <div key={i} className="art-image-thumb-container">
        <div className="art-post-title">
          <p className="art-post-date">{date(posts[x].create_time)}</p>
          <h3>{posts[x].title}</h3>
        </div>
        <Link to={`/allposts/${posts[x].id}`}>
          {<img src={`/api/static/post-images/${posts[x].image_link}`} alt="" className="art-post-thumb" />}
        </Link>
      </div>
    ));
    return newarr;
  }

  render() {
    return (
      <div className="content">
        <div className="art-post-container">{this.getPosts()}</div>
      </div>
    );
  }
}

export default ArtPostList;
