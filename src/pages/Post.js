import React, { Component } from "react";
import {Switch,Route} from "react-router-dom";
import marked from 'marked';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch(`/api/getposts/${this.props.match.params.id}`)
      .then(
        response => response.json()
      )
      .then(parsedData => {
        console.log(parsedData);
        this.setState({posts: parsedData});
        this.setState({post_title:parsedData[0]['title']});
        document.title = 'Meguna | ' + this.state.post_title;

      })

  }

  getPosts() {
    let getMarkdownText = this.getMarkdownText;
    console.log(this.state.posts);
    let posts = this.state.posts;
    let newarr =  Object.keys(posts).map(function(x,i) {
      let content = posts[x].content;

      return <div key={i}>
                <h1>{posts[x].title}</h1>
                <div dangerouslySetInnerHTML={getMarkdownText(posts[x].content)} />
             </div>;
      })
    return newarr;
  }

  getMarkdownText(md) {
    let renderer = new marked.Renderer();

// `${process.env.PUBLIC_URL}/header-images/${posts[x].image_link}-25.png`

    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: true
    });
    let rawMarkup = marked(md, {sanitize: true});
    return { __html: rawMarkup };
  }

  render() {
    return (
      <div>
          <div>{this.getPosts()}</div>
      </div>
    );
  }
}

export default Post;
