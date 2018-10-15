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
                        <React.Fragment>
                            {p.images.length === 0 && <div
                                className="m-2"
                                key={`project-${i}`}
                                style={{
                                    width: '300px',
                                    minHeight: '300px',
                                    backgroundImage: `url(${p.hero})`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'norepeat'
                                }}
                            >
                            </div>}

                            {p.images.length !== 0 && <Link role="button" to={`/detail/${p.id}`}>
                                <div
                                    className="m-2"
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
                            </Link>}
                        </React.Fragment>
                    )}
                </div>
            </div>
        );
    }
}

export default Projects;
