import React, { Component } from 'react';
import content from './content.json';
import Heading from './Heading';
import './App.css';


class Contact extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <Heading title={content.contact.title} anchor="contact" />
                <ul className="pl-4 App-text dashes">
                    <li className="App-text">{content.contact.location}</li>
                    <li><span className="App-text">Phone:</span> <a href={`tel:${content.contact.phone}`}>{content.contact.phone}</a></li>
                    <li><span className="App-text">Email:</span> <a href={`mailto:${content.contact.email}`}>{content.contact.email}</a></li>
                    <li><span className="App-text">LinkedIn:</span> <a href={`https://www.linkedin.com/in/${content.contact.social.linkedIn}`}>{content.contact.social.linkedIn}</a></li>
                    <li><span className="App-text">Vimeo:</span> <a href={`https://vimeo.com/${content.contact.social.vimeo}`}>{content.contact.social.vimeo}</a></li>
                </ul>
            </div>
        );
    }
}

export default Contact;





