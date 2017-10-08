import React, { Component } from 'react';
import './App.css';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import content from './content.json';
import Heading from './Heading';
import Modal from 'react-modal';

class Projects extends Component {
    constructor() {
        super();
        this.state = {
            itemOpen: -1
        };
    }

    open = (e, id) => {
        this.setState({ itemOpen: id });
    }

    close = (e) => {
        this.setState({ itemOpen: -1 });
    }

    render() {
        const customStyles = {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)'
            }
        };

        return (
            <div className="mt-4">
                <Heading title={`portfolio`} anchor={'portfolio'}  />
                <div className="d-flex justify-content-start flex-wrap row">

                    {content.projects.map((p, i) => <div key={`project-${i}`} onClick={e => this.open(e, i)} className="col-12 col-md-6 col-lg-4 pr-3 pb-3"><Card>
                        <CardImg top src={p.image} alt={p.alt} />
                        <CardBody>
                            <CardTitle>{p.title}</CardTitle>
                            <CardSubtitle className="App-portfolio--subtitle">{p.subtitle}</CardSubtitle>
                        </CardBody>
                    </Card></div>)}

                </div>
                {this.state.itemOpen !== -1 && <Modal
                    isOpen={this.state.itemOpen !== -1}
                    contentLabel="Modal"
                    className="App-modal-offset"
                    customStyles={customStyles}
                    shouldCloseOnOverlayClick={true}
                    onRequestClose={ this.close }
                >
                    <div className="container App-modal-border p-5">
                        <button onClick={this.close} type="button" className="close click p-2 App-text" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h1>{content.projects[this.state.itemOpen].title}</h1>
                        {content.projects[this.state.itemOpen].text.map((t, index) => <p key={`project-${this.state.itemOpen}-text-modal-${index}`}>{t}</p>)}
                    </div>
                </Modal>}
            </div>
        );
    }
}

export default Projects;
