import React, { Component } from 'react';
import './App.scss';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import About from './About';
import Contact from './Contact';
import Section from './Section';
import Skills from './Skills';
import Projects from './Projects';
import content from './content.json';

class App extends Component {
  render() {

    return (
      <div className="mb-5">
        <Navbar />
        <Jumbotron />
        <div className="container">
          <About />
          <Contact />
          {content.sections.map((s, i) => <Section key={`section-${i}`} title={s.title} items={s.items} />)}
          <Skills />
          <Projects />
        </div>

      </div>
    );
  }
}

export default App;
