import React, { Component } from 'react';
import Heading from './Heading'
import './App.css';

class Section extends Component {
    render() {
        return (
            <div className="d-flex flex-column">
                <div>
                    <Heading title={this.props.title}/>
                </div>
                {this.props.items.map((item, index) =>
                    <div key={`item-${index}`} className="mb-4">
                        {item.link ? 
                        <a href={item.link}><h5>{item.title}</h5></a> : 
                        <h5>{item.title}</h5>}
                        
                        <p className="App-text">{item.subtitle}</p>
                        <ul className="p-0 m-0 pl-4 App-text">
                            {item.attributes.map((attr, index) =>
                                <li key={`attr-${index}`}>{attr}</li>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}

export default Section;
