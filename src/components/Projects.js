import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

const projects = [
  {
    title: "E-Commerce Website",
    description:
      "A complete e-commerce platform with authentication, admin dashboard, and product management using MERN stack and Tailwind CSS.",
    link: "https://github.com/Viraj494/E-Commerce-Website",
    screenshot: "/screenshots/ecommerce.png",
  },
  {
    title: "Inventory Management System",
    description:
      "Backend APIs for inventory and user authentication using Node.js, Express, and MongoDB.",
    link: "https://github.com/Viraj494/Inventory-Management-System",
    screenshot: "/screenshots/inventory.png",
  },
  {
    title: "Employee Management System",
    description:
      "Role-based access system using Spring Boot, React, MySQL, and Bootstrap.",
    link: "https://github.com/Viraj494/Employee-Management-System-Springboot-React",
    screenshot: "/screenshots/employee.png",
  },
];

const Projects = () => (
  <div id="projects">
    <h2 className="mb-4 fw-semibold text-primary">Projects</h2>
    <Row>
      {projects.map((project, index) => (
        <Col md={6} lg={4} key={index} className="mb-4">
          <Card className="h-100 shadow-sm border-0 project-card">
            <Card.Img
              variant="top"
              src={project.screenshot}
              alt={project.title}
              style={{ height: "180px", objectFit: "cover", borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem" }}
            />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
            </Card.Body>
            <Card.Footer className="bg-white border-0">
              <Button variant="outline-primary" href={project.link} target="_blank" className="w-100">
                View on GitHub
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);

export default Projects;
