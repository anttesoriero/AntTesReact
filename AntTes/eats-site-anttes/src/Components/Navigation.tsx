import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem, UncontrolledCollapse, ListGroup, ListGroupItem, NavbarText } from 'reactstrap';
import { Helmet } from 'react-helmet';
import { GiHamburgerMenu } from 'react-icons/gi'

const Navigation = (prop: {pageName: string}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNav = () => setIsOpen(!isOpen);

    const isMobile = window.innerWidth < 1000;

    const navItems = [
        ["About", "./about"],
        ["My Links", "./splash"]
    ]

    return (
        <div className="header">
            <Helmet>
                <title>{prop.pageName} | AntTes Eats</title>
            </Helmet>

            {isMobile?
                <div>
                    <Navbar color="dark" dark expand="md"  className="navstyle">
                    <NavbarBrand href="/" className={'mx-auto brand'} style={{fontSize: 30}}>AntTes Eats</NavbarBrand>
                        <GiHamburgerMenu style={{ color: 'white' }} id="toggler" />
                    </Navbar>

                    {/* Dropdown */}
                    <UncontrolledCollapse toggler="#toggler">
                        <ListGroup flush>
                            {navItems.map(item => (
                                <ListGroupItem tag="a" href={item[1]} className="centered" action><h5 style={{ fontWeight: 'bold' }}>{item[0]}</h5></ListGroupItem>
                            ))}

                            {/* AntTes */}
                            <ListGroupItem tag="a" href="http://anttes.com" className="centered" action><h5 style={{ fontWeight: 'bold' }}>AntTes</h5></ListGroupItem>
                        </ListGroup>
                    </UncontrolledCollapse>
                </div>
            :
                <Navbar color="dark" dark expand="md"  className="navstyle">
                    <NavbarBrand href="/" className={'mx-auto brand'} style={{fontSize: 30}}>AntTes Eats</NavbarBrand>
                    <NavbarToggler onClick={toggleNav} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav navbar className="mr-auto">
                            {/* Items next to logo*/}
                            <NavbarText className="navtext">Food Reviews</NavbarText>
                        </Nav>
                        

                        {/* Right side of nav bar */}
                        <UncontrolledDropdown navbar inNavbar>
                            <DropdownToggle nav caret style={{color: 'white', fontWeight: 'bolder'}}>
                                MENU
                            </DropdownToggle>
                            <DropdownMenu right>
                                    {navItems.map(item => (
                                        <DropdownItem href={item[1]}>{item[0]}</DropdownItem>
                                    ))}

                                    {/* AntTes */}
                                    <DropdownItem divider />                                    
                                    <DropdownItem href="http://anttes.com">AntTes</DropdownItem>
                                </DropdownMenu>
                        </UncontrolledDropdown>
                    </Collapse>
                </Navbar>
            }
        </div>
    );
}

export default Navigation;