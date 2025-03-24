import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const Header = () => (
  <div id="home">
    <Row className="align-items-center mb-5 p-4 rounded shadow bg-white">
      <Col md={4} className="text-center mb-3 mb-md-0">
        <img
          src="/viraj.jpg"
          alt="Viraj Kalhara"
          className="img-fluid rounded-circle shadow"
          style={{ width: "200px", height: "200px", objectFit: "cover" }}
        />
      </Col>
      <Col md={8}>
        <h1 className="fw-bold display-5">Viraj Kalhara</h1>
        <h4 className="text-muted">Trainee Software Engineer</h4>
        <p className="mt-3">
          Detail-oriented and innovative full-stack developer skilled in MERN, Spring Boot,
          and DevOps. Passionate about building scalable software with modern tools and
          cloud technologies.
        </p>
        <Button variant="dark" href="mailto:virajkalhara1234@gmail.com">Contact Me</Button>
      </Col>
    </Row>
  </div>
);

export default Header;
