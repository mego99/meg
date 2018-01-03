import React, { Component } from "react";
import {Switch,Route} from "react-router-dom";
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/vs2015.css';

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
        console.log(parsedData);
        this.setState({posts: parsedData});
        this.setState({post_title:parsedData[0]['title']});
        document.title = 'Meguna | ' + this.state.post_title;
      })

    fetch(`/api/getpostimages/${this.props.match.params.id}`)
      .then(
        response => response.json()
      )
      .then(parsedData => {
        console.log(parsedData);
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
        return <div></div>
      };
    })
    return newarr;
  }

  getImages() {
    let TextDecoder = te.TextDecoder;
    let images = this.state.post_images;
    console.log(images);
    let newarr =  Object.keys(images).map(function(x,i) {
      let baseStr = 'data:image/jpeg;base64,';
      console.log(images[x]);
      // let data = btoa(String.fromCharCode.apply(null,images[x].image.data));
      // console.log(new TextDecoder('base-64').decode(new Uint8Array(images[x].image.data)));
      console.log(images[x].image);
      console.log(images[x].image.data);
      return <div key={i} >
              <img className="post-image" src={baseStr}></img>
              <p>image</p>
             </div>
    })
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
      </div>
    );
  }
}

export default Post;
