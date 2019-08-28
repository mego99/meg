import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './FeaturedPost.css';

class FeaturedPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        title: '',
        subtitle: '',
        image_link: '',
      },
    };
  }

  componentDidMount() {
    const { slug } = this.props;
    fetch(`/api/getposts/${slug}`)
      .then(res => res.json())
      .then((parsedData) => {
        this.setState({
          post: parsedData,
        });
      });
  }

  render() {
    const { post } = this.state;
    const { slug, tagLine, big } = this.props;
    const bigClass = big ? 'featured-big' : '';
    return (
      <div className={`featured-post-container ${bigClass}`}>
        <Link to={`/post/${slug}`}>
          {post.image_link && (
            <img
              className="featured-thumb"
              src={`/api/static/${post.image_link}_1x.png`}
              srcSet={`/api/static/${post.image_link}_1x.png 1x,
                /api/static/${post.image_link}_2x.png 2x`}
              alt={`${post.title}`}
            />
          )}
        </Link>
        <div className="featured-info-wrapper">
          <p className="featured-tagline">{tagLine}</p>
          <Link to={`/post/${slug}`}>
            <h2 className="featured-title">{post.title}</h2>
          </Link>
          <p className="featured-slug">
            {post.subtitle}
          </p>
        </div>
      </div>
    );
  }
}

FeaturedPost.propTypes = {
  slug: PropTypes.string.isRequired,
  tagLine: PropTypes.string,
  big: PropTypes.bool,
};

FeaturedPost.defaultProps = {
  tagLine: '',
  big: false,
};

export default FeaturedPost;
