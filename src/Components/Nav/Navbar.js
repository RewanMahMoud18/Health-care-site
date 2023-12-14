import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Nav.css";
import logo from "../../Assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Navbars = () => {
  return (
    <Navbar expand="lg">
      <div className="container">
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" title="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="active link-nav">
              Home
            </Link>

            <NavDropdown title="Pages" id="pages-dropdown">
              <NavDropdown.Item href="/AboutUs">About Us</NavDropdown.Item>

              <NavDropdown.Item href="/our-team">Our Team</NavDropdown.Item>

              <NavDropdown.Item href="/booking">Booking</NavDropdown.Item>

              <NavDropdown.Item href="#login-register">
                Login / Register
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Services" id="services-dropdown">
              <NavDropdown.Item href="#service">Service</NavDropdown.Item>
              <NavDropdown.Item href="#service-detail">
                Service Detail
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Blog" id="blog-dropdown">
              <NavDropdown.Item href="#blogs">Blogs</NavDropdown.Item>
              <NavDropdown.Item href="#blog-details">
                Blog Details
              </NavDropdown.Item>
            </NavDropdown>
            <Link className="link-nav" to="/Contact">
              Contact Us
            </Link>
            <Nav.Link href="#link">
              <FontAwesomeIcon icon={faSearch} />
            </Nav.Link>
            <Link>
              <button>
                Contact Us
                <span>
                  <FontAwesomeIcon icon={faChevronRight} />
                </span>
              </button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Navbars;
