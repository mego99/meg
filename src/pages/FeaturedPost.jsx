import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './FeaturedPost.css';

class FeaturedPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
    };
  }

  componentDidMount() {
    const { postId } = this.props;
    fetch(`/api/getposts/${postId}`)
      .then(res => res.json())
      .then((parsedData) => {
        this.setState({
          post: parsedData,
        });
      });
  }

  getPost() {
    const { post } = this.state;
    const { postId, tagLine, catLink, catLabel } = this.props;
    return (
      <div className="featured-post-container">
        <p className="featured-tagline">{tagLine}</p>
        <Link to={`/post/${postId}`}>
          <h2 className="featured-title">{post.title}</h2>
        </Link>
        <p className="featured-slug">{post.subtitle}
        </p>
      </div>
    );
  }

  render() {
    return (
      <Fragment>
        {this.getPost()}
      </Fragment>
    );
  }
}

export default FeaturedPost;
