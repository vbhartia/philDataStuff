import React, {Component} from 'react';
import {
    Col,
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
    DropdownItem,
    Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => (
    <footer className="text-center">
        <NavLink href="/about-us">ABOUT US</NavLink>
        <NavLink href="/about-data">ABOUT THE DATA</NavLink>
        <NavLink href="/contact">CONTACT</NavLink>
        <Row>
            <Col><a href="/" className="media-icon"><FontAwesomeIcon icon={faFacebookF} size="2x"/></a></Col>
            <Col><a href="/" className="media-icon"><FontAwesomeIcon icon={faTwitter} size="2x"/></a></Col>
            <Col><a href="/" className="media-icon"><FontAwesomeIcon icon={faInstagram} size="2x"/></a></Col>
        </Row>
    </footer>
)

export default Footer;