import React, { Component } from 'react';
import phone from './assets/phone.svg';
import email from './assets/email.svg';
import ln from './assets/ln.svg';
import vimeo from './assets/vimeo.svg';
import content from './content.json';

class Jumbotron extends Component {
    render() {
        return (
            <div className="App-bg d-flex justify-content-center align-items-center">
                <div id="home">
                    {/* <h1 className="header-font">{content.title}</h1> */}
                    <img src="https://i.imgur.com/k2FcSIs.jpg" className="App-jumbotron-hero-image" alt="Ellie Earle: Creative Design & Marketing" />
                    <ul className="App-bg--connect d-flex justify-content-between">

                        <li className="p-2" role="button">
                            <a href={`mailto:${content.contact.email}`}><img src={email} alt="email" /></a>
                        </li>
                        <li className="p-2" role="button">
                            <a href={content.contact.social.linkedIn}><img src={ln} alt="linkedin" className="linkedin" /></a>
                        </li>
                        <li className="p-2"  role="button">
                            <a target="_blank" href={`tel:${content.contact.phone}`}><img src={phone} alt="phone" /></a>
                        </li>
                        <li className="p-2 "  role="button">
                            <a target="_blank" href={content.contact.social.vimeo}><img src={vimeo} width="46" alt="vimeo" /></a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Jumbotron;