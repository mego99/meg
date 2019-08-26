import React from 'react';
import { Link } from 'react-router-dom';
import './PostList.css';

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      postlistorigin: '',
      fetchstatus: false,
    };
    this.parseTags = this.parseTags.bind(this);
  }

  componentDidMount() {
    const { badState } = this;
    fetch(this.props.postlistorigin)
      .then((response, error) => {
        if (response.status !== 200) {
          badState();
          return '{}';
        }
        return response.json();
      }) // resolve promise by linking to next .then
      .then((parsedData) => {
        this.setState({ posts: parsedData, fetchstatus: true });
      });
  }

  badState = () => {
    this.setState({ fetchstatus: false });
  }

  adjustDate(date) {
    const t = date.split(/[- :TZ]/);
    const d = new Date(Date.UTC(t[0], t[1] - 1, t[2], t[3], t[4], t[5]));
    const dateOptions = { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'Asia/Tokyo' };
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
    const { parseTags } = this;

    const newarr = Object.keys(posts).map((x, i) => (
      <div key={i} className={`post-container ${i}`}>
        <div className="post-thumb-container">
          {<img src={`/api/static/post-images/${posts[x].image_link}`} alt="" className="post-thumb" />}
        </div>
        <div className="post-infobox">
          <div className="post-tags">{parseTags(posts[x].tags)}</div>
          <Link to={`/allposts/${posts[x].id}`} className="post-title">{posts[x].title}</Link>
          <p className="post-date">{date(posts[x].create_time)}</p>
        </div>

      </div>
    ));
    return newarr;
  }

  render() {
    if (this.state.fetchstatus) {
      return (
        <div className="content">
          <div>{this.getPosts()}</div>
        </div>
      );
    }
    return (
      <div className="content">
        <p>We seem to be having connectivity issues. Sorry!</p>
      </div>
    );
  }
}

export default PostList;
