import React, { Component } from 'react';
import './App.css';

class Vimeo extends Component {
    render() {
        return (
            <div>
                <iframe 
                    src={`https://player.vimeo.com/video/${this.props.id}`}
                    width="100%" 
                    title={`vimeo:${this.props.id}`}
                    height="360" 
                    frameBorder="0" 
                    allowFullScreen>
                </iframe>
            </div>
        );
    }
}

export default Vimeo;
