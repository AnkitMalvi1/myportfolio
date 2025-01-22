import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I’m <span className="purple">Ankit Kumar</span>—a passionate software developer 
            and a recent B.Tech graduate in Computer Science from 
            <span className="purple"> CLG Institute of Engineering and Technology, Rajasthan</span>.
            <br />
            I thrive on building innovative applications that make a difference. Whether it's crafting a 
            gaming rewards platform like <span className="purple">DreamUC</span> or developing feature-rich 
            web and mobile solutions, I bring a blend of technical expertise and creativity to every project.
            <br />
            <br />
            With hands-on experience in full-stack development, mobile app creation, and problem-solving, 
            I’m proficient in React Native, Django, Python, and JavaScript. My journey includes impactful 
            internships where I built secure apps and contributed to dynamic web platforms. I also enjoy 
            taking on DSA challenges and exploring groundbreaking features in games like PUBG and 
            Genshin Impact.
            <br />
            <br />
            Beyond coding, I’m driven by a desire to create technology that solves real-world problems and 
            enhances user experiences. Let’s connect and explore opportunities to collaborate on impactful 
            projects. Feel free to reach out—I’d love to hear your ideas and share mine!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Emerging Tech
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ankit Kumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
