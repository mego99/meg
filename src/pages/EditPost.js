import React, { Component } from "react";
import {Switch,Route} from "react-router-dom";

class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
        };
    this.getId = this.getId.bind(this);

  }

  componentDidMount() {
    fetch(`/api/getposts/6`)
      .then(
        response => response.json()
      )
      .then(parsedData => {
        console.log(parsedData);
        this.setState({posts: parsedData});
        this.getId();


      })
  }

  getId() {
    return   this.state.posts[0].id;
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
    const data = new FormData(event.target);
    fetch(`/api/updatepost/${this.getId()}`, {
      method: 'PUT',
      body: data,
    });
  }


  render() {
    const divstyles = {
        padding: '1vw'
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
        <form  onSubmit={this.submit}>
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

export default EditPost;
