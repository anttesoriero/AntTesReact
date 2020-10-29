import React, { useContext, useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import ATPic from '../Styles/Images/AnthonyTesoriero.png'
{/*import { MdPerson } from 'react-icons/md';
import { IconContext } from 'react-icons'; */}

const ATSpin = () => {
    return (
        <div className="spin grayScale al-right">
            <figure>
                <img className="round" src={ATPic} alt="Avatar" width="200px" />
            </figure>
        </div>
    );
}

export default withRouter(ATSpin);