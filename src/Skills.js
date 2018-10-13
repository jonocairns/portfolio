import React, { Component } from 'react';
import './App.css';
import content from './content.json';
import Heading from './Heading';

class Skills extends Component {
  render() {

    return (
      <div>
          <Heading title={`Skills & Experience`} anchor={"skills"}/>
          {content.skills.paragraphs.map((p, i) => 
              <p key={`skills-p-${i}`}>{p}</p>
          )}
          <div className="d-flex flex-wrap justify-content-center">
            {content.skills.items.map((s, i) => <div key={`skills-item-${i}`} className="pt-3 pb-3">
            <div style={{width: '10rem'}} className="text-uppercase d-inline">{s.title}</div>
            {i !== (content.skills.items.length - 1) && <span className="mx-3" style={{color: '#6b9ad1'}}>•</span>}
            </div>)}
          </div>
          
      </div>
    );
  }
}

export default Skills;
