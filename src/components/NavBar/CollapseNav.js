import React from 'react';
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
    
export const CollapseNav = () => (
    <Nav className="ml-auto" navbar>
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                STORIES
            </DropdownToggle>
            <DropdownMenu right>
                <DropdownItem>
                    <a href="/story-inec">INEC STORY</a>
                </DropdownItem>
                <DropdownItem>
                    <a href="/story-turnout">TURNOUT STORY</a>
                </DropdownItem>
                <DropdownItem>
                    <a href="/story-technology">TECHNOLOGY STORY</a>
                </DropdownItem>
                <DropdownItem>
                    <a href="/story-party">PARTIES STORY</a>
                </DropdownItem>
                <DropdownItem>
                    <a href="/story-pvt">PVT STORY</a>
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                ABOUT
            </DropdownToggle>
            <DropdownMenu right>
                <DropdownItem>
                    <a href="/about-data">ABOUT THE DATA</a>
                </DropdownItem>
                <DropdownItem>
                    <a href="/about-us">ABOUT US</a>
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
        <NavItem>
            <NavLink href="/contact">CONTACT</NavLink>
        </NavItem>
    </Nav>
)