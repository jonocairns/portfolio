import React, { Component } from 'react';
import './App.css';
import content from './content.json';
import Heading from './Heading';
import { Progress } from 'reactstrap';

class Skills extends Component {
  render() {

    return (
      <div>
          <Heading title={`skills`} anchor={"skills"}/>
          {content.skills.paragraphs.map((p, i) => 
              <p key={`skills-p-${i}`}>{p}</p>
          )}
          {content.skills.items.map((s, i) => <div key={`skills-item-${i}`} className="pt-3 pb-3">
                <div className="text-uppercase">{s.title}</div>
              <Progress bar className="App-gold" value={s.percent}></Progress>
              </div>)}
      </div>
    );
  }
}

export default Skills;
