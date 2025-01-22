import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  // AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m Ankit Kumar, a passionate full-stack developer and recent B.Tech graduate in Computer Science from CLG Institute of Engineering and Technology, Pali, Rajasthan. With a CGPA of 8.17, I’ve built a strong foundation in programming and software development.
              <br />
              <br />
              I’m fluent in classics like
              <i>
                <b className="purple"> C++, JavaScript, and Python. </b>
              </i>
              <br />
              <br />
              My areas of interest include building innovative &nbsp;
              <i>
                <b className="purple">Web Technologies and Products</b> and exploring new opportunities in{" "}
                <b className="purple">Cross-Platform Development.</b>
              </i>
              <br />
              <br />
              I’m also passionate about creating products with <b className="purple">Node.js</b> and using
              <i>
                <b className="purple"> Modern JavaScript Libraries and Frameworks </b>
              </i>
              like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
              <br />
              <br />
              Over the years, I’ve had the opportunity to work on some exciting projects:
              <br />
              <br />
              <ul>
                <li>
                  <strong>DreamUC App</strong> - A gaming rewards platform developed with <strong className="purple">React Native</strong>, <strong className="purple">Django</strong>, and <strong className="purple">MySQL</strong>, available on the Play Store and Amazon App Store.
                </li>
                <li>
                  <strong>BunnyNXT</strong> - A Django-based website for streaming and downloading songs, built for a smooth and easy-to-use experience.
                </li>
                <li>
                  <strong>User Authentication System</strong> - A secure app using <strong className="purple">Java</strong> and <strong className="purple">Firebase</strong> to manage user logins and sessions.
                </li>
              </ul>
              <br />
              <br />
              During my internships, I gained hands-on experience in:
              <br />
              <ul>
                <li><strong className="purple">Android Development</strong> at Samyak IT Solutions.</li>
                <li><strong className="purple">WordPress Development</strong> at IT Universe Techsol.</li>
                <li><strong className="purple">Web Development</strong> at Devsnest Community.</li>
              </ul>
              <br />
              <br />
              I’m always excited to solve problems through DSA challenges and explore new technologies.
              <br />
              <br />
              I’m driven by the desire to create technology that solves real-world problems. Let’s connect and explore opportunities to work together on impactful projects. Feel free to reach out—let’s build something amazing!
            </p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AnkitMalvi1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:ankitmalviya06219@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ankitkumar152/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/ank.malvi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
