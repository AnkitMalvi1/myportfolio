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
    title="Paneo - Trips & Activity Planner"
    description="Highlights: A Next.js-based web app for planning travel experiences. Features onboarding, trip suggestions, and activity recommendations based on location. Technology used: Next.js, React, Tailwind CSS, REST APIs."
    ghLink="https://github.com/AnkitMalvi1/Paneo"
    demoLink="https://paneo.onrender.com/"
  />
</Col>
<Col md={4} className="project-card">
  <ProjectCard
    isBlog={false}
    title="Taskify - Task Management Web App"
    description="Highlights: A full-featured task management system allowing users to manage to-dos, assign tasks, and organize their workflow efficiently. Technology used: MongoDB, Express.js, React.js, Node.js."
    ghLink="https://github.com/AnkitMalvi1/Taskify"
  />
</Col>
<Col md={4} className="project-card">
  <ProjectCard
    isBlog={false}
    title="DreamUC App - Next.js Version"
    description="Highlights: Web version of the DreamUC App for gaming rewards and redemptions. Features include daily tasks, polls, and gift card redemptions. Deployed on Amazon App Store and the web. Technology used: Next.js, Tailwind CSS, Django, MySQL."
    ghLink="https://github.com/AnkitMalvi1/dreamuc-nextjs"
    demoLink="https://www.amazon.in/DreamUC-Earn-Money-Online/dp/B0D9Y69VMV"
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    isBlog={false}
    title="LineFlow - Production Line Management"
    description="Highlights: MERN-based system to manage production workflows. Includes order CRUD, material stock management, role-based access, analytics, and protected routes using JWT. Technology used: MongoDB, Express.js, React.js, Node.js."
    ghLink="https://github.com/AnkitMalvi1/LineFlow"
    demoLink="lineflow-1.onrender.com/dashboard"
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    isBlog={false}
    title="Edemy - LMS Platform"
    description="Highlights: Learning Management System for course creation, management, and viewing. Supports user authentication and CRUD operations for courses. Technology used: MongoDB, Express.js, React.js, Node.js."
    ghLink="https://github.com/AnkitMalvi1/Edemy"
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    isBlog={false}
    title="BunnyNxt - Music Clone"
    description="Highlights: A Django-based music platform inspired by Spotify and YouTube Music. Allows streaming and managing music files with a sleek frontend. Technology used: Django, HTML, CSS, JavaScript."
    ghLink="https://github.com/AnkitMalvi1/BunnyNxt"
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    isBlog={false}
    title="Myinsta - Django Social Media App"
    description="Highlights: Instagram-inspired social media platform with posts, likes, comments, real-time chat, and notifications. Built with Django and Tailwind CSS. Technology used: Django, Tailwind, HTML, CSS, JS, jQuery, SQLite/MySQL."
    ghLink="https://github.com/AnkitMalvi1/socialmedia"
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    isBlog={false}
    title="Portfolio Website (New Version)"
    description="Highlights: React-based animated portfolio showcasing personal profile, skills, and project highlights. Focuses on interactivity and responsive design. Technology used: React.js, HTML, CSS."
    ghLink="https://github.com/AnkitMalvi1/myportfolio"
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    isBlog={false}
    title="Auto-Commit Repo"
    description="Highlights: Python automation script that generates random commits to boost GitHub contribution activity daily or weekly. Technology used: Python, GitHub Actions."
    ghLink="https://github.com/AnkitMalvi1/auto-commit-repo"
  />
</Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="DreamUC App"
              description="Highlights: A gaming rewards platform offering daily tasks, polls, and redemption options for UC, gift cards, and mobile recharges. Deployed on Google Play Store, Amazon App Store, and the web, with over 10,000 downloads and a 4.2/5 rating. Technology used: React Native, Java, Django, MySQL, Tailwind CSS, Next.js."
              ghLink="https://github.com/AnkitMalvi1/DreamUC"
              demoLink="https://dreamuc.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Real-time Chat Application"
              description="Highlights: A Django-based real-time chat app with secure user authentication. Features include a chat list page to view friends and a real-time messaging page for seamless communication. Technology used: Django, HTML, CSS, JavaScript, Fetch API."
              ghLink="https://github.com/AnkitMalvi1/Real-time-Chat-App"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Quizify - React Web App"
              description="Highlights: Solid user authentication system using local storage. Offers a quiz web app with multiple MCQs and an answer-checking system to determine correct or incorrect responses. Technology used: React.js."
              ghLink="https://github.com/AnkitMalvi1/Quizify"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Notes - Web App"
              description="Highlights: A simple web app for managing multiple short notes. Utilizes local storage for persistent storage and features a minimalist UI. Technology used: HTML, CSS, JavaScript, jQuery."
              ghLink="https://github.com/AnkitMalvi1/Notes-App"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="5D-JS-Challenge"
              description="Highlights: A collection of 5 mini-projects showcasing best practices in HTML, CSS, and JavaScript. Projects include a stopwatch timer, debouncing and throttling, modal, carousel, and dropdown. Technology used: JavaScript, HTML, CSS."
              ghLink="https://github.com/AnkitMalvi1/5D-JS-Challenge"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard

              isBlog={false}
              title="Shopping Cart"
              description="Highlights: Offering a seamless user experience for efficient online shopping. Help to: Simplify the shopping process, providing an intuitive interface and smooth transaction flow. Technology used: Reactjs with Hooks, Sass."
              ghLink="https://github.com/AnkitMalvi1/Shopping-Cart"
            // demoLink="https://github.com/AnkitMalvi1/Shopping-Cart"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard

              isBlog={false}
              title="Portfolio Website"
              description="Highlights: Designed a visually appealing ReactJS-based portfolio website to establish a strong online presence, communicate skills, and engage visitors effectively. Technology used: Reactjs, Firebase, Sass."
              ghLink="https://github.com/AnkitMalvi1/Portfolio-Website"
            // demoLink="https://info.a1developer.in/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard

              isBlog={false}
              title="CryptoBit"
              description="Highlights: Personalised Crypto Currency and Trading Info web Application. 
              Help to see all the Crypto Currency exchanges, coins with currency conveter and charts using API. Technology used: Reactjs, Chakra-ui, API."
              ghLink="https://github.com/AnkitMalvi1/CryptoBit"
            // demoLink="https://api.a1developer.in/"
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
            // demoLink="https://github.com/AnkitMalvi1/Java-Login-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard

              isBlog={false}
              title="Trim Url Bot"
              description="Highlights: Perfect tool for Simplifying your
              Online Communication. Help to Shorten long URLs into tiny Links. Technology used: Rest, Api, Python, Github."
              ghLink="https://github.com/AnkitMalvi1/TrimUrl-Bot"
            // demoLink="https://github.com/AnkitMalvi1/TrimUrl-Bot"
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
            // demoLink="https://github.com/AnkitMalvi1/BunnyNxt"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard

              isBlog={false}
              title="Keep Records"
              description="Highlights: The Reactjs web app which is used to Keep records like Todo app. Help to perform CRUD tasks as todo app. Technology used: Reactjs, API."
              ghLink="https://github.com/AnkitMalvi1/Mini-Projects"
            // demoLink="https://github.com/AnkitMalvi1/Mini-Projects"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard

              isBlog={false}
              title="Movies Grid"
              description="Highlights: The Reactjs web app which is a movies and it's like Netfix web app. Help to watch the movies and their info in the grid manner. Technology used: Reactjs, API."
              ghLink="https://github.com/AnkitMalvi1/Mini-Projects"
            // demoLink="https://github.com/AnkitMalvi1/Mini-Projects" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard

              isBlog={false}
              title="20D JS Challenge"
              description="Highlights the 20 days 20 Projects in the JavaScript, which is usually used in many web applications and real world projects. Technology used: JavaScript, API."
              ghLink="https://github.com/AnkitMalvi1/20D-JS-Challenge"
            // demoLink="https://github.com/AnkitMalvi1/20D-JS-Challenge"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
