import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './FeaturedPost.css';

class FeaturedPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
      postlistorigin: '',
      fetchstatus: false,
    };
  }

  componentDidMount() {
    const { badState } = this;
    fetch(`/api/getposts/${this.props.postId}`)
      .then((response, error) => {
        if (response.status !== 200) {
          badState();
          return '{}';
        }
        return response.json();
      })
      .then((parsedData) => {
        this.setState({ post: parsedData, fetchstatus: true });
      });
  }

  badState = () => {
    this.setState({ fetchstatus: false });
  }

  getPost() {
    const post = this.state.post[0];
    return (
      <div className="featured-post-container">
        <p className="featured-tagline">{this.props.tagLine}</p>
        <Link to={`/allposts/${this.props.postId}`}>
          <h2 className="featured-title">{post.title}</h2>
        </Link>
        <p className="featured-slug">
          {post.slug}
          <span>
            <Link
              className="featured-read-more"
              to={`/allposts/${this.props.postId}`
              }
            >
              read more
            </Link>
          </span>
        </p>
        <Link
          className="featured-link featured-expansive-link"
          to={this.props.catLink}
        >
          {this.props.catLabel}
        </Link>
      </div>
    );
  }

  render() {
    if (this.state.fetchstatus) {
      return (
        <Fragment>
          {this.getPost()}
        </Fragment>
      );
    }
    return (
      <Fragment>
        <p>We seem to be having connectivity issues. Sorry!</p>
      </Fragment>
    );
  }
}

export default FeaturedPost;
// /api/getposts/:id
