import React from "react";
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className='navbar'>
            <h1 className='brand'>KM Manyathi</h1>
            <div className='nav-links'>
                <ul>
                    <li id='about'>ABOUT</li>
                    <li id='separator'>|</li>
                    <li id='projects'>PROJECTS</li>
                    <li id='separator'>|</li>
                    <li id='certifications'>CERTIFICATIONS</li>
                    <li id='separator'>|</li>
                    <li id='contact'>CONTACT</li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
