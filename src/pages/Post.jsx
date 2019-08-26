import React from 'react';
import marked from 'marked';
import hljs from 'highlight.js';
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
    fetch(`/api/getposts/${match.params.id}`)
      .then(response => response.json())
      .then((parsedData) => {
        console.log(parsedData);
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
          <h1>{ post.title }</h1>
          {(content !== '') && <div dangerouslySetInnerHTML={{ __html: content }} />}
        </div>
      </div>
    );
  }
}

export default Post;
