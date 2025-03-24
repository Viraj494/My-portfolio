import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-scroll";

const NavbarComponent = () => {
  return (
<Navbar expand="lg" bg="light" sticky="top" className="shadow-sm custom-navbar">
<Container>
        <Navbar.Brand className="fw-bold">Viraj Kalhara</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            {["home", "projects", "skills", "certifications", "contact"].map((section) => (
              <Nav.Link as={Link}
                key={section}
                to={section}
                smooth={true}
                duration={500}
                offset={-70}
                className="nav-link-custom"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
