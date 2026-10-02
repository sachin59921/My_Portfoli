import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import "../../pages/style.css";

function Header() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Navbar.Brand
        className="logotext"
        as={Link}
        to="/"
        aria-label="Sachin Kumar Pal - Home"
        onClick={() => updateExpanded(false)}
      >
        <div className="logo" aria-hidden="true"></div>
      </Navbar.Brand>

      <Navbar.Toggle
        className="navbar-toggler"
        aria-controls="responsive-navbar-nav"
        aria-label={expand ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => {
          updateExpanded(expand ? false : "expanded");
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </Navbar.Toggle>

      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="responsive-navbar"
      >
        <Nav className="ms-auto">
          <Nav.Item>
            <NavLink
              className={({ isActive }) =>
                `nav-link${isActive ? " active" : ""}`
              }
              to="/"
              onClick={() => updateExpanded(false)}
            >
              Home
            </NavLink>
          </Nav.Item>

          <Nav.Item>
            <NavLink
              className={({ isActive }) =>
                `nav-link${isActive ? " active" : ""}`
              }
              to="/about"
              onClick={() => updateExpanded(false)}
            >
              About
            </NavLink>
          </Nav.Item>

          <Nav.Item>
            <NavLink
              className={({ isActive }) =>
                `nav-link${isActive ? " active" : ""}`
              }
              to="/project"
              onClick={() => updateExpanded(false)}
            >
              Projects
            </NavLink>
          </Nav.Item>

          <Nav.Item>
            <NavLink
              className={({ isActive }) =>
                `nav-link${isActive ? " active" : ""}`
              }
              to="/contact"
              onClick={() => updateExpanded(false)}
            >
              Contact
            </NavLink>
          </Nav.Item>

          <Button
            type="button"
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1Tk2ALdGrKOXa00taHIR9ih3CzFsn7sbN/view?usp=sharing",
                "_blank",
                "noopener,noreferrer"
              );
            }}
            className="resumebtn"
            aria-label="Open Sachin Kumar Pal's resume"
          >
            <span>Resume</span>
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;