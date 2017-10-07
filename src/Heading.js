import React, { Component } from 'react';
import './App.css';

class Heading extends Component {
    render() {

        return (
            <h6 className="pb-3 pt-3 mt-3" id={this.props.anchor || this.props.title}>
                <span className="App-section--title text-uppercase">{this.props.title}</span>
            </h6>
        );
    }
}

export default Heading;



