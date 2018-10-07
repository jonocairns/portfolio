import React, { Component } from 'react';
import './App.css';
import content from './projects.json';
import { find } from 'lodash';

class ProjectDetail extends Component {
    constructor() {
        super();
    }

    render() {
        const projects = content.projects;
        const project = find(projects, p => p.id === Number(this.props.match.params.id));

        return (<React.Fragment>
            <div className="col-12 col-md-9">
                {project.images.map((p, i) =>
                    <img src={p.url}
                        className="w-100"
                        key={`project-det-${i}`}
                    />
                )}

            </div>
            <div className="col-12 col-md-3">
                <p><b>Project Type: </b>{project.title}</p>
                <p><b>Description: </b>{project.text}</p>
                <p><b>Credits: </b>{project.credits}</p>
            </div>
        </React.Fragment>
        );
    }
}

export default ProjectDetail;
