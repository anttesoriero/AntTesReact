import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavLink, NavbarBrand, Nav, Col, Row } from 'reactstrap';
import { AiFillLinkedin, AiFillGithub, AiFillTwitterSquare, AiFillMail } from "react-icons/ai";

const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNav = () => setIsOpen(!isOpen);
    let linkStyle = {color: 'white', textDecoration: 'none'}

    const iconSize = "30px"
    // const footLinks = {
    //     LinkedIn: ["LinkedIn", "http://linkedin.com/in/anttesoriero", <AiFillLinkedin size={iconSize} className="footIconStyle"/>],
    //     GitHub: ["GitHub", "http://github.com/anttesoriero", <AiFillGithub size={iconSize} className="footIconStyle"/>],
    //     Twitter: ["Twitter", "http://twitter.com/anttesoriero", <AiFillTwitterSquare size={iconSize} className="footIconStyle"/>],
    //     Email: ["Email", "mailTo:anttesoriero@gmail.com", <AiFillMail size={iconSize} className="footIconStyle"/>]
    // }

    const isMobile = window.innerWidth < 1000;

    return (
        <div className="footer">
            {isMobile?
            <div>
            <Navbar color="dark" dark expand="md">
                <Nav vertical>
                    <NavbarBrand className={'brand'}>Connect with me</NavbarBrand>
                    <Row>
                        <Col xs="auto"><NavLink style={linkStyle} href="mailTo:anttesoriero@gmail.com"><AiFillMail size={iconSize} className="footIconStyle"/> Email</NavLink></Col>
                        <Col xs="auto"><NavLink style={linkStyle} href="http://linkedin.com/in/anttesoriero" target="_blank"><AiFillLinkedin size={iconSize} className="footIconStyle"/> LinkedIn</NavLink></Col>
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
                            <NavLink style={linkStyle} href="mailTo:anttesoriero@gmail.com"><AiFillMail size={iconSize} className="footIconStyle"/> Email</NavLink>
                            <NavLink style={linkStyle} href="http://linkedin.com/in/anttesoriero" target="_blank"><AiFillLinkedin size={iconSize} className="footIconStyle"/> LinkedIn</NavLink>
                            <NavLink style={linkStyle} href="http://github.com/anttesoriero" target="_blank"><AiFillGithub size={iconSize} className="footIconStyle"/> GitHub</NavLink>
                            <NavLink style={linkStyle} href="http://twitter.com/anttesoriero" target="_blank"><AiFillTwitterSquare size={iconSize} className="footIconStyle"/> Twitter</NavLink>
                            {/* <NavLink style={linkStyle} href="./contact">Contact</NavLink>
                            <NavLink style={linkStyle} href="./legal">Legal</NavLink> */}

                        {/* {
                            Object.values(footLinks).map((key, index) => ( 
                                <div className="footElement">
                                    <NavLink style={linkStyle} to={key[1]} target="_blank">{key[2]} {key[0]}</NavLink>
                                </div>
                            ))
                        } */}
                        </Nav>
                    </Collapse>
                </Navbar>
            }
        </div>
    );
}

export default Footer;