import React from 'react';
import PropTypes from 'prop-types';
import 'highlight.js/styles/rainbow.css';
import './Post.css';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      content: '',
    };
  }

  componentDidMount() {
    const { match } = this.props;
    fetch(`/api/getposts/${match.params.slug}`)
      .then(response => response.json())
      .then((parsedData) => {
        this.setState({
          post: parsedData,
        });
        document.title = `Meguna | ${parsedData.title}`;
        fetch(`/api/pc/${parsedData.content_link}`)
          .then(res => res.text())
          .then((res) => {
            this.setState({
              content: res,
            });
          })
          .catch(err => console.error(err));
      });
  }

  render() {
    const { post, content } = this.state;
    return (
      <div className="content post-detail-page-content">
        <div>
          {(post && post.title) && <h1 className="post-title">{ post.title }</h1>}
          {(post && post.subtitle) && <h2 className="post-subtitle">{ post.subtitle }</h2>}
          {(content !== '') && (
            <div
              className="post-content-wrapper"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default Post;
