import React, { useContext, useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

{/*import { MdPerson } from 'react-icons/md';
import { IconContext } from 'react-icons'; */}

const ATSpin = (prop: {image: string}) => {
    return (
        <div className="spin grayScale al-right">
            <figure>
                <img className="round" src={prop.image} alt="Avatar" width="200px" />
            </figure>
        </div>
    );
}

export default ATSpin;