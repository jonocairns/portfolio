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
                        <a href={item.link} target="_blank"><h6 className="font-weight-bold d-inline">{item.title}</h6> • <span className="App-text"><b>{item.subtitle}</b></span></a> : 
                        <h6><b>{item.title}</b></h6>}
                        
                        {!item.link && <p>{item.subtitle}</p>}
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
