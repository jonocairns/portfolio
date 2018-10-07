import React from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom'

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }
    toggle = () => {
        if (window.innerWidth < 1200) {
            this.setState({
                isOpen: !this.state.isOpen
            });
        }
    }

    render() {
        return (
            <div>
                <Navbar color="white" light expand="xs" fixed={`top`}>
                    <NavbarToggler onClick={this.toggle} role="button" className="click" />
                    <Collapse isOpen={this.state.isOpen} navbar className="d-lg-flex justify-content-center">
                        <Nav navbar>
                            <NavItem>
                                <Link className="nav-link" role="button" to={'/'}>Work</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" role="button" to={'/about'}>
                                    About
                                </Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}