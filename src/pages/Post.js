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

  getImages() {
    let images = this.state.post_images;
    let newarr =  Object.keys(images).map(function(x,i) {
      let baseStr = 'data:image/jpeg;base64,';
            var base64 = btoa(
        new Uint8Array(images[x].image.data)
        .reduce((data, byte) => data + String.fromCharCode(byte), '')
      );
      return <div key={i} className="post-image-container">
              <img className="post-image" src={baseStr + base64} alt={images[x].description}></img>
              <p className="image-description">{images[x].description}</p>
             </div>
    });
    return newarr;
  }

  getMarkdownText(md) {
    let renderer = new marked.Renderer();
    marked.setOptions({
      renderer: new marked.Renderer(),
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
    let rawMarkup = marked(md, {sanitize: true});
    return { __html: rawMarkup };
  }

  render() {
    return (
      <div>
          <div>{this.getPosts()}</div>
          <div>{this.getImages()}</div>
      </div>
    );
  }
}

export default Post;
