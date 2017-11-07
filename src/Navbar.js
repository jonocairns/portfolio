import React from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import Scroll from 'react-scroll';
import content from './content.json';
var Link = Scroll.Link;
var scroll = Scroll.animateScroll;

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

    scrollToTop = () => {
        scroll.scrollToTop({
            duration: 500,
            smooth: true
        });
        this.toggle();
    }

    render() {
        return (
            <div>
                <Navbar color="white" light expand="md" fixed={`top`}>
                    {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
                    <NavbarToggler onClick={this.toggle} role="button" className="click" />
                    <Collapse isOpen={this.state.isOpen} navbar className="d-lg-flex justify-content-md-center">
                        <Nav navbar>
                            <NavItem>
                                <a className="nav-link" role="button" onClick={this.scrollToTop}>Home</a>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" role="button" onClick={this.toggle} smooth={true} duration={500} to="about" offset={-56} >
                                    About
                                </Link>
                            </NavItem>
                            {content.sections.map((s, i) => <NavItem key={`nav-section-${i}`}>
                                <Link className="nav-link text-capitalize" role="button" onClick={this.toggle} smooth={true} duration={500} to={s.title} offset={-56}>
                                    {s.title}
                                </Link>
                            </NavItem>)}
                            <NavItem>
                                <Link className="nav-link" role="button" onClick={this.toggle} smooth={true} duration={500} to="skills" offset={-56}>
                                    Skills
                                </Link>

                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" role="button" onClick={this.toggle} smooth={true} duration={500} to="portfolio" offset={-56}>
                                    Portfolio
                                </Link>

                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" role="button" onClick={this.toggle} smooth={true} duration={500} to="contact" offset={-56}>
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