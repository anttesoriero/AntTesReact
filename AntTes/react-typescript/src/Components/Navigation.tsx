import React, { useContext, useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { withRouter } from 'react-router-dom';
{/*import { MdPerson } from 'react-icons/md';
import { IconContext } from 'react-icons'; */}

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNav = () => setIsOpen(!isOpen);

    return (
        <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/" className={'mx-auto brand'}>Anthony Tesoriero</NavbarBrand>
            <NavbarToggler onClick={toggleNav} />
            <Collapse isOpen={isOpen} navbar>
                <Nav navbar className="mr-auto">
                    {/*
                    <NavItem>
                        <NavLink href="/tasks">Task Board</NavLink>
                    </NavItem>
                    {/*<NavItem>
                        <NavLink href="/profile">Profile</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/findtasks">Find a Task</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/listtasks">List a Task</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/survey">Surveys</NavLink>
                    </NavItem>
                    */}
                </Nav>
                

                {/* Right side of nav bar */}
                <UncontrolledDropdown navbar inNavbar>
                    <DropdownToggle nav caret style={{color: 'white', fontWeight: 'bolder'}}>
                        More
                    </DropdownToggle>
                    {/* Checks if signed in, then conditionally renders different menu */}
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
                </UncontrolledDropdown>
            </Collapse>
        </Navbar>
    );
}

export default withRouter(Navigation);