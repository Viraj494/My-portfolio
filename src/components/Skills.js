import React from "react";
import { Row, Col } from "react-bootstrap";

const Skills = () => (
  <div id="skills">
    <h2 className="mt-5 mb-4 fw-semibold text-primary">Skills</h2>
    <Row className="bg-white p-4 rounded shadow">
      <Col>
        <ul className="list-unstyled">
          <li><strong>Languages:</strong> JavaScript, Java, C, C++, Python, PHP</li>
          <li><strong>Frameworks:</strong> React.js, Node.js, Express.js, Spring Boot</li>
          <li><strong>Databases:</strong> MongoDB, MySQL, Firebase</li>
          <li><strong>Cloud & DevOps:</strong> Docker, AWS, Azure, VMware</li>
          <li><strong>Others:</strong> JWT, RBAC, Git, Linux</li>
        </ul>
      </Col>
    </Row>
  </div>
);

export default Skills;
