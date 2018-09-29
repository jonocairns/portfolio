import React, { Component } from 'react';
import './App.css';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import content from './content.json';
import Heading from './Heading';
import Modal from 'react-modal';
import Vimeo from './Vimeo';

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
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '350px',
                overlfow: 'scroll',
                marginTop: '56px',
                backgroundColor: 'white',
                overflow: 'scroll'
            }
        };
        const modalStyles = {overlay: {zIndex: 9999}};

        return (
            <div className="mt-4">
                <Heading title={`Portfolio of Work`} anchor={'portfolio'} />
                <div className="d-flex justify-content-start flex-wrap row">

                    {content.projects.map((p, i) => <div key={`project-${i}`} onClick={e => this.open(e, i)} className="col-12 col-md-6 col-lg-4 pr-3 pb-3"><Card>
                        <CardImg top src={p.images[0].url} alt={p.images[0].alt} />
                        <CardBody>
                            <CardTitle>{p.title}</CardTitle>
                            <CardSubtitle className="App-portfolio--subtitle">{p.subtitle}</CardSubtitle>
                        </CardBody>
                    </Card></div>)}

                </div>
                {this.state.itemOpen !== -1 && <Modal
                    isOpen={this.state.itemOpen !== -1}
                    contentLabel="Modal"
                    customStyles={customStyles}
                    shouldCloseOnOverlayClick={true}
                    onRequestClose={this.close}
                    style={modalStyles}
                >
                    <div className="container App-modal-border p-3">
                        <button onClick={this.close} type="button" className="close click p-2 App-text" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="d-flex flex-column">
                            <h1>{content.projects[this.state.itemOpen].title}</h1>
                            {content.projects[this.state.itemOpen].text.map((t, index) => <p key={`project-${this.state.itemOpen}-text-modal-${index}`}>{t}</p>)}
                            {content.projects[this.state.itemOpen].vimeo.map((v, index) => <Vimeo key={`project-${this.state.itemOpen}-video-modal-${index}`} id={v} />)}
                            {content.projects[this.state.itemOpen].images.map((i, index) => <img 
                                key={`project-${this.state.itemOpen}-image-modal-${index}`}
                                className="w-100" 
                                src={i.url} 
                                alt={i.alt} 
                            />)}
                        </div>

                    </div>
                </Modal>}
            </div>
        );
    }
}

export default Projects;
