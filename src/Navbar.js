import React from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import Scroll from 'react-scroll';
import content from './content.json';
var Link = Scroll.Link;

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }
    toggle = () => {
        if(window.innerWidth < 1200) {
            this.setState({
                isOpen: !this.state.isOpen
            });
        }
    }
    render() {
        return (
            <div>
                <Navbar color="white" light expand="md" fixed={`top`}>
                    {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
                    <NavbarToggler onClick={this.toggle} role="button" />
                    <Collapse isOpen={this.state.isOpen} navbar className="d-lg-flex justify-content-lg-center">
                        <Nav navbar>
                            <NavItem>
                                <Link className="nav-link" role="button" onClick={this.toggle} smooth={true} duration={500} to="home">
                                    Home
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" role="button" onClick={this.toggle} smooth={true} duration={500} to="about" >
                                    About
                                </Link>
                            </NavItem>
                            {content.sections.map((s, i) => <NavItem key={`nav-section-${i}`}>
                                <Link className="nav-link text-capitalize" role="button" onClick={this.toggle} smooth={true} duration={500} to={s.title}>
                                    {s.title}
                                </Link>
                            </NavItem>)}
                            <NavItem>
                                <Link className="nav-link" role="button" onClick={this.toggle} smooth={true} duration={500} to="skills">
                                    Skills
                                </Link>

                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" role="button" onClick={this.toggle} smooth={true} duration={500} to="portfolio">
                                    Portfolio
                                </Link>

                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" role="button" onClick={this.toggle} smooth={true} duration={500} to="references">
                                    References
                                </Link>

                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" role="button" onClick={this.toggle} smooth={true} duration={500} to="contact">
                                    Contact
                                </Link>

                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}