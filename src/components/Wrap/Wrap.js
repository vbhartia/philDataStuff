import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import {NavBar} from '../NavBar';
import Footer from '../Footer';

const Wrap = ({children}) => (
    <div>
        <NavBar/>
            {children}
        <Footer/>
    </div>
);

export default Wrap;