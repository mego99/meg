import React from "react";
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/rainbow.css';
import './Post.css';

class Post extends React.Component {
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
                  <div dangerouslySetInnerHTML={ getMarkdownText(posts[x].content) } />
               </div>;
      }
      catch(e) {
        return <div key={i}><p>Coming Soon!</p></div>
      }
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
        return hljs.highlightAuto(code).value;
      }
    });

    renderer.image = function (href, title, text) {
      function imageExists(image_url){
          var http = new XMLHttpRequest();
          http.open('HEAD', image_url, true);
          http.send();
          return http.status !== 404;
      }
      let img = '';
      imageExists('/api/static/post-images/' + href) ? img = `${href}` : img = 'def.png'
      return `<img
                class=post-image src=/api/static/post-images/${img} alt=${text}
              />`;
    };

    let rawMarkup = marked(md, {sanitize: true});
    return { __html: rawMarkup };
  }

  render() {
    return (
      <div className="content post-detail-page-content">
          <div>{this.getPosts()}</div>
      </div>
    );
  }
}

export default Post;
