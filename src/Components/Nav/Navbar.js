import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
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
            <Nav.Link href="/" className="active">
              Home
            </Nav.Link>

            <NavDropdown title="Pages" id="pages-dropdown">
              <NavDropdown.Item href="#about-us">About Us</NavDropdown.Item>

              <NavDropdown.Item href="#our-team">Our Team</NavDropdown.Item>
              <NavDropdown.Item href="#faq">FAQ's</NavDropdown.Item>
              <NavDropdown.Item href="#booking">Booking</NavDropdown.Item>
              <NavDropdown.Item href="#error-404">Error 404</NavDropdown.Item>
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
            <Nav.Link href="#contact-us">Contact Us</Nav.Link>
            <Nav.Link href="#link">
              <FontAwesomeIcon icon={faSearch} />
            </Nav.Link>
            <Nav.Link>
              <button>
                Contact Us
                <span>
                  <FontAwesomeIcon icon={faChevronRight} />
                </span>
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Navbars;
