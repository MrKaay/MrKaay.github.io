import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  NavbarToggler,
} from "reactstrap";
import "./NavBar.scss";
import Loader from "react-loaders";
import "loaders.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading,setLoading]=useState(false);

  const timeLoader=()=>{
      setLoading(true);
      setTimeout(()=>{setLoading(false)},500);
  };
  return (
    <>
    <Navbar
      style={{
        backgroundColor: "#628199",
        borderBottom: "4px solid #b4245d",
        height: "50px",
        maxWidth: "100vw",
      }}
      light
      expand="md"
    >
      <NavbarBrand
        style={{ fontWeight: "bold", fontSize: "20px", color: "#fff" }}
      >
        KM Manyathi
      </NavbarBrand>
      <NavbarToggler
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
      <Collapse isOpen={isOpen} navbar>
        <Nav
          className="ml-auto"
          style={{ alignItems: "end", width: "100%" }}
          navbar
        >
          <NavItem style={{ marginLeft: "auto" }} id="homebutton">
            <NavLink
              className="text-light"
              style={{ fontWeight: "bold", fontSize: "18px", width: "60px", opacity: 0 }}
              href="#contact-navpoint"
          
            >
              <FontAwesomeIcon
                icon={faHome}
                color="#fffff30"
                style={{ marginRight: "-700px", padding: "0px" }}
              />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="text-light"
              style={{ fontWeight: "bold", fontSize: "14px" }}
              href="#about-navpoint"
              onClick={timeLoader}
            >
              ABOUT
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className="text-light"
              style={{ fontWeight: "bold", fontSize: "14px" }}
              href="#projects-navpoint"
              onClick={timeLoader}
            >
              PROJECTS
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className="text-light"
              style={{ fontWeight: "bold", fontSize: "14px" }}
              href="#certifications-navpoint"
              onClick={timeLoader}
            >
              CERTIFICATIONS
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className="text-light"
              style={{ fontWeight: "bold", fontSize: "14px" }}
              href="#contact-navpoint"
            >
              CONTACT
            </NavLink>
          </NavItem>

          {/* SVG icon as a NavItem */}
          <NavItem>
            <NavLink
              className="text-light"
              style={{ fontWeight: "bold", fontSize: "14px" }}
              href="#home-navpoint"
              onClick={timeLoader}
            >
              <FontAwesomeIcon icon={faHome}  />
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
    {loading &&
     <Loader className='loading' style={{position:"fixed",top:"50vh",left:"50vw",zIndex:"999", color: "#B4245D", width: "50px", height: "50px"}} type="pacman" />
    }
    </>
  );
};

export default NavBar;
