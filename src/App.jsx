
//import React from "react";
import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Anish<span>.</span></h2>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="welcome">WELCOME TO MY PORTFOLIO</p>
          <h1>Hi, I'm <span>AnishKrishnan V</span></h1>
          <h2>System Administrator</h2>
          <p>
            RHCE & CCNA Certified IT Professional with 11+ years
            of experience in Linux, Windows, Networking and IT Infrastructure.
            Currently exploring AWS and DevOps Cloud technologies.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn">Contact Me</a>
            <a href="#about" className="btn outline">About Me</a>
          </div>
        </div>

        <div className="hero-image">
  <img
    src="/src/images/profile.jpg"
    alt="AnishKrishnan V"
    className="profile-photo"
  />
</div>
      </section>

      {/* About Section */}
      <section className="section" id="about">
        <h2>About <span>Me</span></h2>
        <p>
          I am an experienced IT professional specializing in Linux
          System Administration, Windows Server Management, Network
          Troubleshooting and IT Support.
          I have worked on enterprise IT infrastructure and
          telecom projects at ITI Limited.
          My goal is to grow in Linux, Cloud and DevOps technologies.
        </p>
      </section>

      {/* Skills Section */}
      <section className="section skills" id="skills">
        <h2>My <span>Skills</span></h2>

        <div className="skill-grid">
          {[
            "Linux Administration",
            "Windows Administration",
            "Networking",
            "CCNA",
            "RHCE",
            "Hardware Troubleshooting",
            "IT Infrastructure",
            "AWS Cloud",
            "DevOps Basics"
          ].map((skill, index) => (
            <div className="skill-card" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="section" id="projects">
        <h2>My <span>Projects</span></h2>

        <div className="project-grid">
          <div className="project-card">
            <h3>NPR Project</h3>
            <p>IT infrastructure and technical support.</p>
          </div>

          <div className="project-card">
            <h3>MLLN Project</h3>
            <p>Network infrastructure and system support.</p>
          </div>

          <div className="project-card">
            <h3>GPON Project</h3>
            <p>Telecom network deployment and maintenance.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact" id="contact">
        <h2>Contact <span>Me</span></h2>
        <p>Let's connect for IT opportunities and professional collaboration.</p>
        <p>📍 Palakkad, Kerala, India</p>
        <p>💼 System Administrator | Linux Engineer</p>
        <a href="mailto:yourmail@gmail.com" className="btn">
          Email Me
        </a>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Anish Krishnan. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;
