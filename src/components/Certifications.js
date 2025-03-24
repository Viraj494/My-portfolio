import React from "react";
import { Row, Col } from "react-bootstrap";

const certifications = [
  "MongoDB University - Introduction to MongoDB",
  "AWS Academy Cloud Foundations",
  "Great Learning - Introduction to ML, Neural Networks",
  "Alison - Basics of Network Engineering",
];

const Certifications = () => (
  <div id="certifications">
    <h2 className="mt-5 mb-4 fw-semibold text-primary">Certifications</h2>
    <Row>
      {certifications.map((cert, idx) => (
        <Col md={6} key={idx} className="mb-3">
          <div className="p-3 bg-white rounded shadow-sm h-100 border-start border-4 border-primary">
            <strong>{cert}</strong>
          </div>
        </Col>
      ))}
    </Row>
  </div>
);

export default Certifications;
