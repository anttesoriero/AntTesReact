import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavLink, NavbarBrand, Nav, Col, Row } from 'reactstrap';
import { AiFillGithub, AiFillTwitterSquare } from "react-icons/ai";
import { FiPlayCircle } from "react-icons/fi";

const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNav = () => setIsOpen(!isOpen);
    let linkStyle = {color: 'white', textDecoration: 'none'}

    const iconSize = "30px"

    const isMobile = window.innerWidth < 1000;

    return (
        <div className="footer">
            {isMobile?
            <div>
            <Navbar color="dark" dark expand="md">
                <Nav vertical>
                    <NavbarBrand className={'brand'}>Connect with me</NavbarBrand>
                    <Row>
                        <Col xs="auto"><NavLink style={linkStyle} href="http://anttes.com" target="_blank"><FiPlayCircle size={iconSize} className="footIconStyle"/> AntTes</NavLink></Col>
                        <Col xs="auto"><NavLink style={linkStyle} href="http://github.com/anttesoriero" target="_blank"><AiFillGithub size={iconSize} className="footIconStyle"/> GitHub</NavLink></Col>
                        <Col xs="auto"><NavLink style={linkStyle} href="http://twitter.com/anttesoriero" target="_blank"><AiFillTwitterSquare size={iconSize} className="footIconStyle"/> Twitter</NavLink></Col>

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
                            <NavLink style={linkStyle} href="http://anttes.com" target="_blank"><FiPlayCircle size={iconSize} className="footIconStyle"/> AntTes</NavLink>
                            <NavLink style={linkStyle} href="http://github.com/anttesoriero" target="_blank"><AiFillGithub size={iconSize} className="footIconStyle"/> GitHub</NavLink>
                            <NavLink style={linkStyle} href="http://twitter.com/anttesoriero" target="_blank"><AiFillTwitterSquare size={iconSize} className="footIconStyle"/> Twitter</NavLink>
                        </Nav>
                    </Collapse>
                </Navbar>
            }
        </div>
    );
}

export default Footer;