import React, { Component } from 'react';
import phone from './assets/CALL.svg';
import email from './assets/MAIL.svg';
import ln from './assets/LINKEDIN.svg';
import vimeo from './assets/VIDEO.svg';
import content from './content.json';
import Scroll from 'react-scroll';
var scroll = Scroll.animateScroll;

class Sidenav extends Component {
    render() {

        return (
            <div className="d-none d-lg-block col-4">
                <div className="sticky-top" style={{ top: '60px' }}>

                <h6 className="pb-0 pt-3 mt-3" id="about"><span className="App-section--title text-uppercase">Contact Me</span></h6>
                    {<ul className="App-bg--connect mt-4 d-flex flex-column pl-2">

                        <li className="p-1" role="button">
                            <a href={`mailto:${content.contact.email}`}><img src={email} alt="email" /></a> {content.contact.email}
                        </li>
                        <li className="p-1" role="button">
                            <a href={content.contact.social.linkedIn}><img src={ln} alt="linkedin" className="linkedin" /></a> ellieearleonlinkedin
                        </li>
                        <li className="p-1" role="button">
                            <a target="_blank" href={`tel:${content.contact.phone}`}><img src={phone} alt="phone" /></a> {content.contact.phone}
                        </li>
                        <li className="p-1 " role="button" onClick={e => {
                            e.preventDefault();
                            scroll.scrollToTop({
                                duration: 500,
                                smooth: true
                            });
                        }}>
                        <button type="button" className="btn btn-dark">Back to Top</button>
                            
                        </li>
                    </ul>}

                </div>
            </div>
        );
    }
}

export default Sidenav;