import React from 'react';
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
        <Link to={`/allposts/${postId}`}>
          <h2 className="featured-title">{post.title}</h2>
        </Link>
        <p className="featured-slug">{post.subtitle}
          <span>
            <Link className="featured-read-more" to={`/allposts/${postId}`}>
              read more
            </Link>
          </span>
        </p>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div>{this.getPost()}</div>
      </div>
    );
  }
}

export default FeaturedPost;
