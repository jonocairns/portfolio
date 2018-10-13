import React, { Component } from 'react';
import './App.css';
import content from './content.json';
import Heading from './Heading';

class Skills extends Component {
  render() {

    return (
      <div>
        <Heading title={`Skills & Experience`} anchor={"skills"} />
        {content.skills.paragraphs.map((p, i) =>
          <p key={`skills-p-${i}`}>{p}</p>
        )}
        <div className="d-none d-md-block ">
          <div className="d-flex flex-wrap justify-content-center">
            {content.skills.items.map((s, i) => <div key={`skills-item-${i}`} className="pb-3">
              <span className="text-nowrap"><span className="mx-3" style={{ color: '#6b9ad1' }}>•</span><span style={{ width: '10rem' }} className="d-inline">{s.title}</span>
              </span>
            </div>)}
          </div>
        </div>


        <ul className="d-block d-md-none dashes">
          {content.skills.items.map((s, i) => <li>{s.title}</li>)}
        </ul>
      </div>
    );
  }
}

export default Skills;
