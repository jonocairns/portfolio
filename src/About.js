import React, { Component } from 'react';
import content from './content.json';
import Heading from './Heading';
import './App.css';

class About extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center flex-column">
                <div>
                    <Heading title={content.about.title} anchor={"about"}/>
                    {content.about.paragraphs.map((p, i) => <p key={`about-p-${i}`} className="App-text">{p}</p>)}
                </div>
            </div>
        );
    }
}

export default About;
