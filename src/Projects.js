import React, { Component } from 'react';
import './App.css';
import content from './projects.json';
import { Link } from 'react-router-dom'

class Projects extends Component {
    constructor() {
        super();
    }

    render() {

        return (
            <div className="mt-4">
                <div className="d-flex justify-content-center flex-wrap">

                    {content.projects.map((p, i) =>
                        <Link role="button" to={`/detail/${p.id}`}>
                            <div
                                className="m-2 hover-img"
                                key={`project-${i}`}
                                style={{
                                    width: '300px',
                                    minHeight: '300px',
                                    backgroundImage: `url(${p.hero})`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'norepeat'
                                }}
                            >
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        );
    }
}

export default Projects;
