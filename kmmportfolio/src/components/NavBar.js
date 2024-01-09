import React, { useState } from 'react';
import { FontAwesomeIcon } from  '@fortawesome/react-fontawesome';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons'; 
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Collapse, NavbarToggler } from 'reactstrap';
import './NavBar.scss';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Navbar style={{ backgroundColor: '#628199', borderBottom: '4px solid #b4245d', height: '50px', maxWidth: '100vw' }} light expand="md">
            <NavbarBrand style={{ fontWeight: 'bold', fontSize: '20px', color: '#fff' }}>KM Manyathi</NavbarBrand>
            <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" style={{ alignItems: 'end', width: '100%' }} navbar>
                <NavItem style={{ marginLeft: 'auto' }} id='homebutton'>
                        <NavLink className='text-light' style={{ fontWeight: 'bold', fontSize: '18px', width: '60px' }} href="#home-navpoint"><FontAwesomeIcon icon={faHome} color="#fffff30" style={{marginRight: '-700px', padding: '0px'}} /></NavLink>
                    </NavItem>
                    <NavItem style={{ marginLeft: 'auto' }}>
                        <NavLink className='text-light' style={{ fontWeight: 'bold', fontSize: '14px' }} href="#about-navpoint">ABOUT</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink className='text-light' style={{ fontWeight: 'bold', fontSize: '14px' }} href="#projects-navpoint">PROJECTS</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink className='text-light' style={{ fontWeight: 'bold', fontSize: '14px' }} href="#certifications-navpoint">CERTIFICATIONS</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink className='text-light' style={{ fontWeight: 'bold', fontSize: '14px' }} href="#contact">CONTACT</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default NavBar;
