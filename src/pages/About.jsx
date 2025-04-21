import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="AboutContainer">
      <div className="BioData">
        <div className="name">
          <h2>JOE DANIEL</h2>
        </div>
        <div className="dobgen">
          <div className="dob">29-07-2006</div>
          <div className="gender">Male</div>
        </div>

        <div className="info">
          <p>
            I like developing devices based off hardware and software which are
            either interesting or useful.
          </p>
        </div>
      </div>
      <div className="projects">
        <h2>PROJECTS</h2>
        <div className="Project1">
          <div className="heading">Autonomous Drone</div>
          Designing a completly end-to-end Autonomous system for drones Achieved
          a complete autonomous takeoff and land till date
        </div>
        <div className="Project2">
          <div className="heading">M.A.R.S.Rover</div>
          Working on a Rover in which I am trying to collect depth data from the
          first principles. Trying to perform autonomous tasks using camera data
        </div>
        <div className="Project3">
          <div className="heading">ESBS</div>
          Designed and Fabricated an Electronic Security Braking System for
          vehicles. The system automatically triggers the brakes/ warn the
          driver in the case of a nearby pedestrian when the vehicle is moving
          at high speeds
        </div>
      </div>
      <div className="skills">
        <h2>SKILLS</h2>
        <div className="innerskill">
          Java <br />
          Python <br /> HTML CSS JS <br /> React <br />
          Embedded C <br /> Electronics Prototyping <br />
          Graphics Designing
        </div>
      </div>
      <div className="education">
        <h2>EDUCATION</h2>
        <div className="innereducation">
          <div className="scaler">Scaler School of Technology [2024-2028]</div>
          <div className="bits">
            BITS Pilani [2024-2027] <br />
            (BSc. Computer Science)
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
