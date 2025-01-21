import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              
              isBlog={false}
              title="Shopping Cart"
              description="Highlights: Offering a seamless user experience for efficient online shopping. Help to: Simplify the shopping process, providing an intuitive interface and smooth transaction flow. Technology used: Reactjs with Hooks, Sass."
              ghLink="https://github.com/AnkitMalvi1/Shopping-Cart"
              demoLink="https://github.com/AnkitMalvi1/Shopping-Cart"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              
              isBlog={false}
              title="Portfolio Website"
              description="Highlights: Designed a visually appealing ReactJS-based portfolio website to establish a strong online presence, communicate skills, and engage visitors effectively. Technology used: Reactjs, Firebase, Sass."
              ghLink="https://github.com/AnkitMalvi1/Portfolio-Website"
              demoLink="https://info.a1developer.in/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              
              isBlog={false}
              title="CryptoBit"
              description="Highlights: Personalised Crypto Currency and Trading Info web Application. 
              Help to see all the Crypto Currency exchanges, coins with currency conveter and charts using API. Technology used: Reactjs, Chakra-ui, API."
              ghLink="https://github.com/AnkitMalvi1/CryptoBit"
              demoLink="https://api.a1developer.in/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              
              isBlog={false}
              title="User Authentication App"
              description="Highlights: Securely Access to Account.
              Help to Authenticating users for Access with firebase Integration. Technology used: Java, Android Studio,
              Firebase, Github."
              ghLink="https://github.com/AnkitMalvi1/Java-Login-App"
              demoLink="https://github.com/AnkitMalvi1/Java-Login-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
             
              isBlog={false}
              title="Trim Url Bot"
              description="Highlights: Perfect tool for Simplifying your
              Online Communication. Help to Shorten long URLs into tiny Links. Technology used: Rest, Api, Python, Github."
              ghLink="https://github.com/AnkitMalvi1/TrimUrl-Bot"
              demoLink="https://github.com/AnkitMalvi1/TrimUrl-Bot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              
              isBlog={false}
              title="BunnyNxt"
              description="Highlights: Seamless Integration of Django
              & User-Friendly Features. Aim: Provide diverse collection of music to
              personalize devices. Technology used: HTML, CSS, JavaScript,
              Django, Hosting."
              ghLink="https://github.com/AnkitMalvi1/BunnyNxt"
              demoLink="https://ankitmalvi.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              
              isBlog={false}
              title="Keep Records"
              description="Highlights: The Reactjs web app which is used to Keep records like Todo app. Help to perform CRUD tasks as todo app. Technology used: Reactjs, API."
              ghLink="https://github.com/AnkitMalvi1/Mini-Projects"
              demoLink="https://github.com/AnkitMalvi1/Mini-Projects"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              
              isBlog={false}
              title="Movies Grid"
              description="Highlights: The Reactjs web app which is a movies and it's like Netfix web app. Help to watch the movies and their info in the grid manner. Technology used: Reactjs, API."
              ghLink="https://github.com/AnkitMalvi1/Mini-Projects"
              demoLink="https://github.com/AnkitMalvi1/Mini-Projects" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
             
              isBlog={false}
              title="20D JS Challenge"
              description="Highlights the 20 days 20 Projects in the JavaScript, which is usually used in many web applications and real world projects. Technology used: JavaScript, API."
              ghLink="https://github.com/AnkitMalvi1/20D-JS-Challenge"
              demoLink="https://github.com/AnkitMalvi1/20D-JS-Challenge"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
