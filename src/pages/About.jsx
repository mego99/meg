import React from "react";
import './About.css';

class About extends React.Component {

  createTable() {
    let dataTable = {
        'name':'Meguna',
        'hometown':'Tokyo',
        'occupation':'freshman at Tufts University',
        'intended major':'computer science',
        'interests':'web applications, statistics, data visualization',
        'currently working on':'becoming more familiar with React',
        'hobbies':'drawing, programming, eating pastries',
        'currently obsessed with':'creating 3D graphics with Cinema 4D',
        'fluent languages':'English and Japanese',
        'github':'https://github.com/mego99',
        'dribbble':'https://dribbble.com/megrivers'
      }

    let output = Object.keys(dataTable).map(function(x,i) {
      return <div key={i} className='data-row'>
                <span className='left'>{x}</span>
                <span className='right'>{dataTable[x]}</span>
             </div>
    });
    console.log(output);
    return output;
  }

  render() {


    return (
      <div className="content">
        <h2>About</h2>
        <p>Hi! I’m Meguna and this is where I showcase and (casually) comment on some of my work so far.
          For any general inquiries, please contact: <a href='mailto:megrivers99@gmail.com'>megrivers99@gmail.com</a>.</p>

        <div className='data-table'>
          {this.createTable()}
        </div>
  </div>


    );
  }
}

export default About
