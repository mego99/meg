import React, { Component } from "react";
import {Switch,Route} from "react-router-dom";
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/vs2015.css';
import './Post.css';

let te = require('text-encoding');

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      post_images: []
    }
  }

  componentDidMount() {
    fetch(`/api/getposts/${this.props.match.params.id}`)
      .then(
        response => response.json()
      )
      .then(parsedData => {
        this.setState({posts: parsedData});
        this.setState({post_title:parsedData[0]['title']});
        document.title = 'Meguna | ' + this.state.post_title;
      })

    fetch(`/api/getpostimages/${this.props.match.params.id}`)
      .then(
        response => response.json()
      )
      .then(parsedData => {
        this.setState({post_images: parsedData});
      })
  }

  getPosts() {
    let getMarkdownText = this.getMarkdownText;
    let posts = this.state.posts;
    let newarr =  Object.keys(posts).map(function(x,i) {
      try {
        return <div key={i}>
                  <h1>{posts[x].title}</h1>
                  <div dangerouslySetInnerHTML={getMarkdownText(posts[x].content)} />
               </div>;
      }
      catch(e) {
        return <div><p>Coming Soon!</p></div>
      };
    })
    return newarr;
  }

  getMarkdownText(md) {
    let renderer = new marked.Renderer();
    marked.setOptions({
      renderer: renderer,
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: true,
      highlight: function (code) {
        return require('highlight.js').highlightAuto(code).value;
      }
    });

    renderer.image = function (href, title, text) {

      return `<img
                src=/static/post-images/${href}
                alt=${text}
                class=post-image
              />`;
    };

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
