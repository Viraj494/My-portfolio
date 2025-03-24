import React from "react";
import { Container } from "react-bootstrap";
import NavbarComponent from "./components/NavbarComponent";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div style={{ backgroundColor: "#f8f9fa", paddingTop: "4rem" }}>
      <NavbarComponent />
      <Container>
        <Header />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </Container>
    </div>
  );
}

export default App;
