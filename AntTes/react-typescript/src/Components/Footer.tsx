import React, { useContext, useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { MdPerson } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { AiFillLinkedin, AiFillGithub, AiFillTwitterSquare, AiFillMail } from "react-icons/ai";

const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNav = () => setIsOpen(!isOpen);
    let linkStyle = {color: 'white', textDecoration: 'none'}

    return (
        <div className="footer">
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/" className={'mx-auto brand'}>&#169; 2021 | Built by Anthony Tesoriero with React</NavbarBrand>
                <NavbarToggler onClick={toggleNav} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar className="mr-auto">
                        {/* <NavItem>
                            <NavLink href="mailTo:anttesoriero@gmail.com">Email</NavLink>
                        </NavItem> */}
                    </Nav>
                    

                    {/* Right side of nav bar
                    <UncontrolledDropdown navbar inNavbar>
                        <DropdownToggle nav caret style={{color: 'white', fontWeight: 'bolder'}}>
                            More
                        </DropdownToggle>
                        {/* Checks if signed in, then conditionally renders different menu
                        <DropdownMenu right>
                                <DropdownItem href="/profile">
                                    Profile Home
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem href="/upcomingtasks">
                                    Upcoming Tasks
                                </DropdownItem>
                                <DropdownItem href="/offers">
                                    Offers
                                </DropdownItem>
                            </DropdownMenu>
                    </UncontrolledDropdown>  */}
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
        </div>
    );
}

export default Footer;