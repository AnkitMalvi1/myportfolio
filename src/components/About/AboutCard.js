import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ankit Kumar </span>
            from <span className="purple"> Pali, Rajasthan.</span>
            <br />
            Recent B.Tech CS graduate from CLGIET, Pali,
Rajasthan, passionate about web dev, strong in
data structures/algorithms. 
            <br />
            Proficient in C++,
Python, Java, JavaScript, with expertise in React
projects for user-centric web apps. Eager to
advance in software engineering and explore
emerging tech.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ankit Malvi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
