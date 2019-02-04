import React, { Component } from "react";
import {Switch,Route} from "react-router-dom";
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/vs2015.css';
import './Post.css';

let Remarkable = require('remarkable');

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
    console.log(posts);
    console.log(posts[0]);
    let newarr =  Object.keys(posts).map(function(x,i) {
      try {
        console.log(posts[x].content);
        let abab = getMarkdownText(posts[x].content);
        let str = "### Part One: Designing the Project";
        return <div key={i}>
                  <h1>{posts[x].title}</h1>
                  <div dangerouslySetInnerHTML={ getMarkdownText(posts[x].content) } />
               </div>;
      }
      catch(e) {
        console.log(e);
        return <div key={i}><p>Coming Soon!</p></div>
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
      function imageExists(image_url){
          var http = new XMLHttpRequest();
          http.open('HEAD', image_url, false);
          http.send();
          return http.status != 404;
      }
      let img = '';
      imageExists('/api/static/post-images/' + href) ? img = `${href}` : img = 'def.png'
      return `<img
                class=post-image src=/api/static/post-images/${img} alt=${text}
              />`;
    };

    let rawMarkup = marked(md, {sanitize: true});
    // let rmk = new Remarkable({
    //   html:true,
    //   highlight: function(str, lang) {
    //     return hljs.highlightAuto(str).value
    //   }
    //   // highlight: function(str, lang) {
    //   //   if (lang && hljs.getLanguage(lang)) {
    //   //     try {
    //   //       return hljs.highlight(lang, str).value;
    //   //     } catch (err) {}
    //   //   }
    //   //   try {
    //   //     return hljs.highlightAuto(str).value;
    //   //   } catch (err) {}
    //   // return ''; // use external default escaping
    //   // }
    // });
    // let rawMarkup = rmk.render(md);
    console.log(rawMarkup);
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
