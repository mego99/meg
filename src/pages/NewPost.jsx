import React, { Component } from "react";
import {Switch,Route} from "react-router-dom";

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
        };
  }

  componentDidMount() {

  }

  getPosts() {
    console.log(this.state.posts);
    let posts = this.state.posts;
    let newarr =  Object.keys(posts).map(function(x,i) {
          return <div key={i}>
                    <h1>{posts[x].title}</h1>
                    <p>{posts[x].content}</p>
                 </div>;
      })
    return newarr;
  }

  submit = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    const inputParsers = {
      number(input) {
        return parseInt(input);
      }
    };

    for (let name of data.keys()) {
      const input = form.elements[name];
      const parserName = input.dataset.parse;

      if (parserName) {
        const parser = inputParsers[parserName];
        const parsedValue = parser(data.get(name));
        data.set(name, parsedValue);
      }
    }
    fetch(`/api/newpost`, {
      method: 'post',
      body: data
    });
  }


  render() {
    const divstyles = {
        padding: '1vw'
    };
    const smallboxstyle = {
      padding: '10px',
      margin:'0.5vw',
      width: '10vw'
    };
    const boxstyle = {
      padding: '10px',
      margin:'0.5vw',
      width: '40vw'
    };
    const bigboxstyle = {
      padding: '10px',
      margin:'0.5vw',
      width: '50vw',
      height:'25vh'
    };

    return (
        <div>
        <form method='post' onSubmit={this.submit}>
          <div style={divstyles} className="input">
            <label htmlFor="title">Enter title</label>
            <br/>
            <input style={boxstyle} id="title" name="title" type="text" required/>
          </div>

          <div style={divstyles} className="input">
            <label htmlFor="tags">Enter tags, comma delimited</label>
            <br/>
            <input style={boxstyle} id="tags" name="tags" type="text" />
          </div>

          <div style={divstyles} className="input">
            <label htmlFor="content">Enter content, markdown</label>
            <br/>
            <textarea style={bigboxstyle} id="content" name="content" type="text" required />
          </div>

          <button>Send data!</button>
        </form>
        </div>
    );
  }
}

export default NewPost;
