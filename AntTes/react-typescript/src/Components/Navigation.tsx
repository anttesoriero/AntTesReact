import React, { useContext, useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
{/*import { MdPerson } from 'react-icons/md';
import { IconContext } from 'react-icons'; */}

const Navigation = (prop: {pageName: string}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNav = () => setIsOpen(!isOpen);

    const isMobile = window.innerWidth < 1000;

    return (
        <div>
            <Helmet>
                <title>Anthony Tesoriero | {prop.pageName}</title>
            </Helmet>
            <Navbar color="dark" dark expand="md"  className="navstyle">
                <NavbarBrand href="/" className={'mx-auto brand'} style={{fontSize: 30}}>Anthony Tesoriero</NavbarBrand>
                <NavbarToggler onClick={toggleNav} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar className="mr-auto">
                        {/*
                        <NavItem>
                            <NavLink href="/sample">Sample</NavLink>
                        </NavItem>
                        */}
                    </Nav>
                    

                    {/* Right side of nav bar */}
                    <UncontrolledDropdown navbar inNavbar>
                        <DropdownToggle nav caret style={{color: 'white', fontWeight: 'bolder'}}>
                            MENU
                        </DropdownToggle>
                        {/* Checks if signed in, then conditionally renders different menu */}
                        <DropdownMenu right>
                                <DropdownItem href="./#resume">
                                    R&eacute;sum&eacute;
                                </DropdownItem>

                                <DropdownItem divider />
                                
                                <DropdownItem href="http://anttes.com/AnthonyTesorieroResume.pdf" target="_blank">
                                    Full R&eacute;sum&eacute; PDF
                                </DropdownItem>
                            </DropdownMenu>
                    </UncontrolledDropdown>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation;