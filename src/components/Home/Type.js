import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "ReactJS Developer",
          "Front-End Maestro",
          "API developer",
          "Django Developer",
          "React Native Developer",
          "Code Explorer",
          "MERN Stack Developer",
          "Web Developer",
          "Backend Engineer",
          "Software Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
