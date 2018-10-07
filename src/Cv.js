import React, { Component } from 'react';
import './App.scss';
import About from './About';
import Section from './Section';
import Skills from './Skills';
import content from './content.json';
import Sidenav from './Sidenav';
import Contact from './Contact';

class Cv extends Component {
    render() {

        return (<React.Fragment>
            <div className="col-12 col-lg-8">
                <About />
                <Contact className="d-block d-lg-none" />
                {content.sections.map((s, i) => <Section key={`section-${i}`} title={s.title} items={s.items} />)}
                <Skills />
            </div>
            <Sidenav />
        </React.Fragment>
        );
    }
}

export default Cv;
