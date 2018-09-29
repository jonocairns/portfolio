import React, { Component } from 'react';
import './App.css';

class Heading extends Component {
    render() {
        const titleArray = this.props.title.split(' ');

        const classNames = 'header-font text-black App-section--title';

        return (
            <h4 className={this.props.className || 'pb-3 pt-3 mt-3 text-lowercase'} id={this.props.anchor || this.props.title}>
                {titleArray.map((w, i) => {
                    if(i === 0) {
                        return <span className={classNames} style={{fontWeight: 900}}>{w} </span>
                    } else {
                        return <span className={classNames}>{w} </span>;
                    }

                
                })
                }
            </h4>
        );
    }
}

export default Heading;



