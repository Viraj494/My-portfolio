import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => (
  <div id="contact" className="mb-4">
    <h2 className="mt-5 mb-4 fw-semibold text-primary">Contact</h2>
    <Row className="bg-white p-4 rounded shadow">
      <Col>
        <p><FaEnvelope className="me-2 text-danger" /> virajkalhara1234@gmail.com</p>
        <p><FaPhone className="me-2 text-success" /> 071 779 9494</p>
        <p>
          <FaLinkedin className="me-2 text-primary" />
          <a href="https://www.linkedin.com/in/virajkalhara" target="_blank" rel="noreferrer">
            linkedin.com/in/virajkalhara
          </a>
        </p>
        <p>
          <FaGithub className="me-2" />
          <a href="https://github.com/Viraj494" target="_blank" rel="noreferrer">
            github.com/Viraj494
          </a>
        </p>
      </Col>
    </Row>
  </div>
);

export default Contact;
