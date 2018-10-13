import React, { Component } from 'react';
import content from './content.json';
import Scroll from 'react-scroll';
import Heading from './Heading'
var scroll = Scroll.animateScroll;

class Sidenav extends Component {
    render() {

        return (
            <div className="d-none d-lg-block col-4">
                <div className="sticky-top" style={{ top: '60px' }}>

                    <div className="bg-light p-4">
                        <Heading title={`Contact Me`} className="pt-0 text-lowercase"/>
                        <h6 className="pb-0" id="about">
                            <span className="App-section--title text-uppercase"></span>
                        </h6>
                        {<ul className="App-bg--connect mt-4 d-flex flex-column font-weight-bold">

                            <li className="p-2" role="button">
                                <a href={`mailto:${content.contact.email}`} >{content.contact.email}</a>
                            </li>
                            <li className="p-2" role="button">
                                <a href={`https://www.linkedin.com/in/${content.contact.social.linkedIn}`}>{content.contact.social.linkedIn}</a>
                            </li>
                            <li className="p-2" role="button">
                                <a target="_blank" href={`tel:${content.contact.phone}`} >{content.contact.phone}</a>
                            </li>
                            <li className="p-2 " role="button" onClick={e => {
                                e.preventDefault();
                                scroll.scrollToTop({
                                    duration: 500,
                                    smooth: true
                                });
                            }}>
                                <a href="#">back to top</a>


                            </li>
                        </ul>}
                    </div>


                </div>
            </div>
        );
    }
}

export default Sidenav;