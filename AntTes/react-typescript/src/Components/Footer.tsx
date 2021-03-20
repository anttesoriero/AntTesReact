import React, { useContext, useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem, Col, Row } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { MdPerson } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { AiFillLinkedin, AiFillGithub, AiFillTwitterSquare, AiFillMail } from "react-icons/ai";

const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNav = () => setIsOpen(!isOpen);
    let linkStyle = {color: 'white', textDecoration: 'none'}

    const isMobile = window.innerWidth < 1000;

    return (
        <div className="footer">
            {isMobile?
            <div>
            <Navbar color="dark" dark expand="md">
                <Nav vertical>
                    <NavbarBrand className={'brand'}>Connect with me</NavbarBrand>
                    <Row>
                        <Col xs="auto"><NavLink style={linkStyle} href="mailTo:anttesoriero@gmail.com"><AiFillMail size="20px" className="iconStyle"/> Email</NavLink></Col>
                        <Col xs="auto"><NavLink style={linkStyle} href="http://linkedin.com/in/anttesoriero" target="_blank"><AiFillLinkedin size="20px" className="iconStyle"/> LinkedIn</NavLink></Col>

                        <Col xs="auto"><NavLink style={linkStyle} href="http://github.com/anttesoriero" target="_blank"><AiFillGithub size="20px" className="iconStyle"/> GitHub</NavLink></Col>
                        <Col xs="auto"><NavLink style={linkStyle} href="http://twitter.com/anttesoriero" target="_blank"><AiFillTwitterSquare size="20px" className="iconStyle"/> Twitter</NavLink></Col>
                        
                        {/* <Col xs="auto"><NavLink style={linkStyle} href="./contact">Contact</NavLink></Col>
                        <Col xs="auto"><NavLink style={linkStyle} href="./legal">Legal</NavLink></Col> */}
                    </Row>
                </Nav>
            </Navbar>

            <Navbar color="dark" dark expand="md"><NavbarBrand href="/" className={'brand'}>&#169; 2021 | Built by Anthony Tesoriero</NavbarBrand></Navbar>
            </div>
            :
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/" className={'mx-auto brand'}>&#169; 2021 | Built by Anthony Tesoriero with React</NavbarBrand>
                    <NavbarToggler onClick={toggleNav} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav navbar className="mr-auto"></Nav>
                        
                        <Nav>
                            <NavLink style={linkStyle} href="mailTo:anttesoriero@gmail.com"><AiFillMail size="20px" className="iconStyle"/> Email</NavLink>
                            <NavLink style={linkStyle} href="http://linkedin.com/in/anttesoriero" target="_blank"><AiFillLinkedin size="20px" className="iconStyle"/> LinkedIn</NavLink>
                            <NavLink style={linkStyle} href="http://github.com/anttesoriero" target="_blank"><AiFillGithub size="20px" className="iconStyle"/> GitHub</NavLink>
                            <NavLink style={linkStyle} href="http://twitter.com/anttesoriero" target="_blank"><AiFillTwitterSquare size="20px" className="iconStyle"/> Twitter</NavLink>
                            {/* <NavLink style={linkStyle} href="./contact">Contact</NavLink>
                            <NavLink style={linkStyle} href="./legal">Legal</NavLink> */}
                        </Nav>
                    </Collapse>
                </Navbar>
            }
        </div>
    );
}

export default Footer;