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
import {CollapseNav} from './index';
import './NavBar.css';

export class NavBar extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.toggleIcon = this.toggleIcon.bind(this);
        this.state = {
            iconCollapsed: true,
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
            iconCollapsed: !this.state.iconCollapsed
        });
    }

    toggleIcon() {
        this.setState({
            iconCollapsed: !this.state.iconCollapsed
        });
    }

//Trying to get the SVG logo to display in line 46. Not sure how JSX pulls images though.
    render() {
        return (
            <Navbar expand="md">
                <NavbarBrand href="/"><img src='img/header_logo.svg'/></NavbarBrand> 
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-content" aria-controls="nav-content" aria-expanded="false" aria-label="Toggle navigation">
                    <div className={this.state.iconCollapsed ? 'nav-icon' : 'nav-icon open'} onClick={this.toggle}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <CollapseNav />
                </Collapse>
            </Navbar>
        );
    }
}
