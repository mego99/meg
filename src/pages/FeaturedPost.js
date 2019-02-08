import React from "react";
import {Link} from "react-router-dom";
import './FeaturedPost.css';

class FeaturedPost extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      post: {},
      postlistorigin: '',
      fetchstatus: false
    };
  }

  componentDidMount() {
    let badState = this.badState;
    fetch('/api/getposts/' + this.props.postId)
      .then(function(response, error) {
        if (response.status !== 200) {
          badState();
          return '{}';
        };
        return response.json();
      }) //resolve promise by linking to next .then
      .then(parsedData => {
        this.setState({post: parsedData, fetchstatus: true});
      })

  }

  badState = () => {
    this.setState({fetchstatus: false});
  }

  getPost() {
    let post = this.state.post[0];
    return <div className="featured-post-container">
            <p className="featured-tagline">{this.props.tagLine}</p>
            <Link to={`/allposts/${this.props.postId}`}>
              <h2 className="featured-title">{post.title}</h2>
            </Link>
            
            <p className="featured-slug">{post.slug}
              <span>
                <Link className="featured-read-more"
                to={`/allposts/${this.props.postId}`}>
                  read more
                </Link> 
              </span>
            </p>
            <Link className="featured-link featured-expansive-link" 
                  to={this.props.catLink}>{this.props.catLabel}</Link>
            
           </div>
  }

  render() {
    if (this.state.fetchstatus) {
      return (
        <div>
            <div>{this.getPost()}</div>
        </div>
      );
    } else {
      return (
        <div>
          <p>We seem to be having connectivity issues. Sorry!</p>
        </div>
      )
    }
    
  }
}

export default FeaturedPost
// /api/getposts/:id