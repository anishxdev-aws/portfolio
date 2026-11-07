
import React, { useEffect, useState } from "react";
import "./App.css";

const techStack = [
  { name: "Linux", icon: "linux", category: "Operating Systems", level: "Professional experience" },
  { name: "Red Hat", icon: "redhat", category: "Operating Systems", level: "RHCE certified" },
  { name: "Ubuntu", icon: "ubuntu", category: "Operating Systems", level: "Working experience" },
  { name: "Windows", icon: "windows", category: "Administration", level: "Professional experience" },
  { name: "AWS", icon: "aws", category: "Cloud", level: "Currently learning" },
  { name: "Docker", icon: "docker", category: "DevOps", level: "Currently learning" },
  { name: "Kubernetes", icon: "kubernetes", category: "DevOps", level: "Currently learning" },
  { name: "Jenkins", icon: "jenkins", category: "CI/CD", level: "Currently learning" },
  { name: "Git", icon: "git", category: "Version Control", level: "Currently learning" },
  { name: "GitHub", icon: "github", category: "Version Control", level: "Currently learning" },
  { name: "Ansible", icon: "ansible", category: "Automation", level: "Currently learning" },
  { name: "Terraform", icon: "terraform", category: "Infrastructure as Code", level: "Currently learning" },
];

const skillData = [
  { name: "Linux Administration", value: 85, label: "Strong experience", type: "experience" },
  { name: "Windows Administration", value: 80, label: "Strong experience", type: "experience" },
  { name: "IT Infrastructure Support", value: 85, label: "Professional experience", type: "experience" },
  { name: "Networking", value: 70, label: "Practical knowledge", type: "experience" },
  { name: "AWS Cloud", value: 30, label: "Currently learning", type: "learning" },
  { name: "DevOps & Automation", value: 25, label: "Currently learning", type: "learning" },
];

const experience = [
  {
    company: "ITI Limited",
    place: "Kanjikode, Palakkad",
    role: "SYSTEM ADMINISTRATOR",
    
    description:
      "  Contributed to large-scale, nationwide IT infrastructure and enterprise projects across almost all states of India, including Northeast India and Jammu & Kashmir. Gained experience supporting critical government, defence and Indian Army installations, fisheries-related projects, and National Population Register (NPR) database operations. Responsibilities included system administration, Windows and Linux server management, network infrastructure support, technical implementation, installation, troubleshooting, and on-site project execution at various locations across India..",
    projects: ["NPR","MFID","MLLN", "GPON", "LCMCEU"],
  },
  {
    company: "District Hospital",
    place: "Palakkad, Kerala",
    role: "IT Coordinator",
    description:
      "Supported hospital IT operations,coordinating vendors,cctv computer systems, printers, network connectivity, billing systems and end-user technical requirements.",
    projects: ["Computer Support", "Printer Maintenance", "Network Troubleshooting"],
  },
  {
    company: "Infolink",
    place: "Ernakulam, Kerala",
    role: "IT Support – Federal Bank Project",
    description:
      "Provided desktop support, troubleshooting and IT operational assistance for the banking environment.",
    projects: ["Desktop Support", "IT Operations", "Troubleshooting"],
  },
];

const projects = [
  {
    number: "01",
    icon: "🐧",
    title: "Linux System Administration",
    description:
      "Linux administration, user and permission management, system monitoring and troubleshooting.",
    tags: ["RHEL", "Ubuntu", "Bash"],
    type: "Professional experience",
  },
  {
    number: "02",
    icon: "🌐",
    title: "Enterprise Network Support",
    description:
      "IT infrastructure support, LAN connectivity, IP configuration and network troubleshooting.",
    tags: ["TCP/IP", "LAN", "Networking"],
    type: "Professional experience",
  },
  {
    number: "03",
    icon: "☁️",
    title: "AWS Cloud Learning Labs",
    description:
      "Developing practical knowledge of cloud computing, AWS services and Linux-based cloud environments.",
    tags: ["AWS", "EC2", "Cloud"],
    type: "Learning project",
  },
  {
    number: "04",
    icon: "⚙️",
    title: "DevOps Practice Environment",
    description:
      "Learning Git workflows, containerization, CI/CD pipelines and infrastructure automation.",
    tags: ["Git", "Docker", "Jenkins"],
    type: "Learning project",
  },
];

const networkNodes = [
  { icon: "👤", name: "Users", detail: "Client devices" },
  { icon: "🛡️", name: "Firewall", detail: "Security layer" },
  { icon: "🌐", name: "Router", detail: "Routing" },
  { icon: "🔀", name: "Switch", detail: "LAN connectivity" },
  { icon: "🐧", name: "Linux Server", detail: "Server services" },
  { icon: "☁️", name: "Cloud", detail: "AWS environment" },
];

function SectionHeading({ number, title, highlight, description }) {
  return (
    
    <div className="section-heading">
      <span className="section-number">{number} / PORTFOLIO</span>
      <h2>{title} <span>{highlight}</span></h2>
      {description && <p>{description}</p>}
    </div>
    
  );
  
}

function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const filteredProjects = projects.filter((project) =>
    activeFilter === "All"
      ? true
      : project.type === activeFilter
  );

  return (
    <main className="portfolio">

      {/* NAVIGATION */}
      <header className="navbar">
        <a href="#home" className="logo">
          My Portfolio<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["Home", "About", "Skills", "Technology", "Experience", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>

        <a href="/Anish" download className="nav-download">
          Download CV ↗
        </a>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-grid"></div>

        <div className="hero-content reveal">
          <div className="availability">
            <span className="live-dot"></span>
            IT INFRASTRUCTURE PROFESSIONAL
          </div>

          <p className="hero-intro">HELLO, I'M</p>

          <h1>
            ANISH
            <br />
            <span>KRISHNAN.V</span>
          </h1>

          <h2>
            Linux Administrator
            <span className="hero-separator"> | </span>
            IT Infrastructure
            <br />
            <span className="cyan-text">Networking | AWS Cloud & DevOps</span>
          </h2>

          <p className="hero-description">
            RHCE Certified IT professional with 10 years of experience
            in enterprise IT infrastructure, Linux and Windows administration,
            networking and technical support. Currently expanding my expertise
            in AWS Cloud and DevOps technologies.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button-primary">
              Explore My Work <span>↗</span>
            </a>
            <a href="#contact" className="button-outline">
              Let's Connect
            </a>
          </div>

          <div className="hero-highlights">
            <div>
              <strong>10+</strong>
              <span>Years IT Experience</span>
            </div>
            <div>
              <strong>RHCE</strong>
              <span>Certified Engineer</span>
            </div>
            <div>
              <strong>CCNA</strong>
              <span>Course Completed</span>
            </div>
          </div>
        </div>

        {/* 3D LOGO ORBIT */}
        <div className="hero-visual reveal">
          <div className="visual-caption">MY TECHNOLOGY UNIVERSE</div>

          <div className="orbit-scene">
            <div className="orbit-ring ring-one"></div>
            <div className="orbit-ring ring-two"></div>
            <div className="orbit-ring ring-three"></div>

            <div className="orbit-core">
              <div className="core-inner">
                <span>IT</span>
                <strong>ENGINEER</strong>
                <small>INFRASTRUCTURE</small>
              </div>
            </div>

            {techStack.map((tech, index) => (
              <div
                className={`orbit-logo orbit-logo-${index}`}
                key={tech.name}
                title={tech.name}
              >
                <img
                  src={`https://skillicons.dev/icons?i=${tech.icon}`}
                  alt={tech.name}
                />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>

          <div className="visual-footer">
            <span className="visual-dot"></span>
            LINUX • AWS • NETWORKING • CLOUD • DEVOPS
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section about-section" id="about">
        <SectionHeading
          number="01"
          title="About"
          highlight="Me"
          description="An experienced IT professional building on a strong infrastructure foundation and expanding into cloud technologies."
        />

        <div className="about-layout reveal">
          <div className="about-profile">
            <div className="profile-frame">
              <img
                src="/profile.jpg"
                alt="AnishKrishnan V"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling.style.display = "grid";
                }}
              />
              <div className="profile-placeholder">AK</div>
              <div className="profile-badge">RHCE CERTIFIED ENGINEER</div>
            </div>
          </div>

          <div className="about-copy">
            <span className="eyebrow">WHO I AM</span>
            <h3>Passionate about IT Infrastructure & Modern Technologies.</h3>

            <p>
              I am an IT infrastructure professional with a Diploma in
              Computer Engineering and extensive hands-on experience in
              enterprise IT environments.
            </p>

            <p>
              My professional background includes Linux administration,
              Windows support, system maintenance, network troubleshooting
              and technical support across PSU and healthcare environments.
            </p>

            <p>
              I am currently pursuing Cloud and DevOps training to strengthen
              my knowledge of AWS, containerization, automation and modern
              infrastructure management.
            </p>

            <div className="about-facts">
              <div><span>Location</span><strong>Palakkad, Kerala</strong></div>
              <div><span>Education</span><strong>Computer Engineering</strong></div>
              <div><span>Certification</span><strong>RHCSA RHCE – RHEL 7</strong></div>
              <div><span>Networking</span><strong>CCNA course completed</strong></div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section skills-section" id="skills">
        <SectionHeading
          number="02"
          title="Technical"
          highlight="Expertise"
          description="A graphical overview of my experience and current learning areas."
        />

        <div className="skill-grid reveal">
          {skillData.map((skill, index) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-top">
                <div>
                  <span className="skill-index">0{index + 1}</span>
                  <h3>{skill.name}</h3>
                  <small>{skill.label}</small>
                </div>
                <div
                  className={`skill-circle ${skill.type}`}
                  style={{ "--progress": `${skill.value}%` }}
                >
                  <span>{skill.value}%</span>
                </div>
              </div>

              <div className="skill-track">
                <div
                  className={`skill-fill ${skill.type}`}
                  style={{ "--bar-width": `${skill.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <p className="skill-note">
          Progress values are illustrative self-assessments, not examination
          results or independently verified proficiency scores.
        </p>
      </section>

      {/* TECHNOLOGY */}
      <section className="section technology-section" id="technology">
        <SectionHeading
          number="03"
          title="Technology"
          highlight="Stack"
          description="The tools and technologies that form my IT infrastructure foundation and ongoing Cloud & DevOps learning journey."
        />

        <div className="tech-legend">
          <span><i className="legend-experience"></i> Professional / working experience</span>
          <span><i className="legend-learning"></i> Currently learning</span>
        </div>

        <div className="tech-grid reveal">
          {techStack.map((tech, index) => (
            <div className="tech-card" key={tech.name}>
              <div className="tech-card-top">
                <span>TECH {String(index + 1).padStart(2, "0")}</span>
                <span className={tech.level === "Currently learning" ? "learning-tag" : "experience-tag"}>
                  {tech.level === "Currently learning" ? "LEARNING" : "EXPERIENCE"}
                </span>
              </div>

              <div className="tech-logo-wrap">
                <img
                  src={`https://skillicons.dev/icons?i=${tech.icon}`}
                  alt={tech.name}
                />
              </div>

              <h3>{tech.name}</h3>
              <p>{tech.category}</p>
              <div className="tech-bottom">EXPLORE TECHNOLOGY ↗</div>
            </div>
          ))}
        </div>

        <div className="networking-panel reveal">
          <div>
            <span className="eyebrow">NETWORK ENGINEERING</span>
            <h3>Networking & Infrastructure</h3>
            <p>Core networking concepts and enterprise IT support skills.</p>
          </div>

          <div className="network-tags">
            {[
              "TCP/IP", "LAN / WAN", "Routing & Switching",
              "IP Addressing", "Subnetting", "DNS & DHCP",
              "Firewall Fundamentals", "Network Troubleshooting",
              "Cisco Networking", "Printer & Desktop Support",
            ].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE ARCHITECTURE */}
      <section className="section architecture-section">
        <SectionHeading
          number="04"
          title="Infrastructure"
          highlight="Architecture"
          description="A conceptual enterprise network showing how users connect through network infrastructure to server and cloud environments."
        />

        <div className="architecture-box reveal">
          <div className="architecture-top">
            <span>ENTERPRISE NETWORK TOPOLOGY</span>
            <span className="architecture-status">
              <i></i> CONCEPTUAL DIAGRAM
            </span>
          </div>

          <div className="network-flow">
            {networkNodes.map((node, index) => (
              <React.Fragment key={node.name}>
                <div className="network-node">
                  <div className="network-node-icon">{node.icon}</div>
                  <strong>{node.name}</strong>
                  <small>{node.detail}</small>
                </div>
                {index !== networkNodes.length - 1 && (
                  <div className="network-connector">
                    <span></span>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="architecture-bottom">
            <span>NETWORK CONNECTIVITY</span>
            <span>SERVER INFRASTRUCTURE</span>
            <span>CLOUD ENVIRONMENT</span>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section experience-section" id="experience">
        <SectionHeading
          number="05"
          title="Professional"
          highlight="Journey"
          description="My experience across enterprise IT, technical support and infrastructure environments."
        />

        <div className="timeline reveal">
          {experience.map((item, index) => (
            <div className="timeline-item" key={item.company}>
              <div className="timeline-marker">
                <span>0{index + 1}</span>
              </div>

              <div className="timeline-content">
                <div className="timeline-date">{item.period}</div>
                <h3>{item.company}</h3>
                <h4>{item.role}</h4>
                <span className="timeline-place">{item.place}</span>
                <p>{item.description}</p>

                <div className="timeline-tags">
                  {item.projects.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DEVOPS PIPELINE */}
      <section className="section pipeline-section">
        <SectionHeading
          number="06"
          title="DevOps"
          highlight="Workflow"
          description="An animated illustration of a typical CI/CD workflow I am learning through hands-on practice."
        />

        <div className="pipeline-box reveal">
          <div className="pipeline-heading">
            <span>CONTINUOUS INTEGRATION / CONTINUOUS DELIVERY</span>
            <span className="pipeline-live"><i></i> ANIMATED WORKFLOW</span>
          </div>

          <div className="pipeline">
            {[
              { icon: "⌘", name: "CODE", tool: "Git / GitHub" },
              { icon: "⚙", name: "BUILD", tool: "Build Tools" },
              { icon: "✓", name: "TEST", tool: "Testing" },
              { icon: "▣", name: "CONTAINER", tool: "Docker" },
              { icon: "☸", name: "DEPLOY", tool: "Kubernetes" },
              { icon: "☁", name: "CLOUD", tool: "AWS" },
            ].map((step, index) => (
              <React.Fragment key={step.name}>
                <div className="pipeline-step">
                  <div className="pipeline-icon">{step.icon}</div>
                  <strong>{step.name}</strong>
                  <small>{step.tool}</small>
                </div>
                {index !== 5 && <div className="pipeline-arrow"><span>→</span></div>}
              </React.Fragment>
            ))}
          </div>

          <div className="pipeline-progress">
            <div></div>
          </div>
          <p>Illustrative DevOps learning workflow — not a production deployment claim.</p>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section projects-section" id="projects">
        <SectionHeading
          number="07"
          title="Featured"
          highlight="Projects"
          description="Professional IT work and practical learning projects."
        />

        <div className="project-filters">
          {["All", "Professional experience", "Learning project"].map((filter) => (
            <button
              key={filter}
              className={activeFilter === filter ? "filter active" : "filter"}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {filteredProjects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-top">
                <span>{project.number} / PROJECT</span>
                <span>↗</span>
              </div>

              <div className="project-visual">
                <div className="project-glow"></div>
                <span>{project.icon}</span>
              </div>

              <div className="project-type">{project.type}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>

              <button
                className="project-more"
                onClick={() => setActiveProject(project)}
              >
                VIEW DETAILS ↗
              </button>
            </article>
          ))}
        </div>

        {activeProject && (
          <div className="modal-overlay" onClick={() => setActiveProject(null)}>
            <div
              className="project-modal"
              role="dialog"
              aria-modal="true"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setActiveProject(null)}>
                ✕
              </button>
              <span className="eyebrow">{activeProject.type}</span>
              <h3>{activeProject.title}</h3>
              <p>{activeProject.description}</p>
              <div className="project-tags">
                {activeProject.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* CONTACT */}
      <section className="section contact-section" id="contact">
        <div className="contact-glow"></div>

        <div className="contact-content reveal">
          <span className="section-number">08 / CONTACT</span>
          <h2>Let's Connect &<br /><span>Build the Future.</span></h2>

          <p>
            Open to opportunities in Linux Administration, System Administration,
            IT Infrastructure, Networking and Cloud Support.
          </p>

          <div className="contact-links">
            <a href="mailto:anikrish.v@gmail.com">
              <span>✉</span>anikrish.v@gmail.com
            </a>
            <a href="http://www.linkedin.in" target="_blank" rel="noreferrer">
              <span>in</span> LinkedIn Profile
            </a>
            <span><span>⌖</span> Palakkad, Kerala, India</span>
          </div>

          <a className="button-primary" href="mailto:your-email@example.com">
            Get In Touch ↗
          </a>
        </div>
      </section>

      <footer className="footer">
        <a href="#home" className="logo">ANISH<span>.</span></a>
        <p>© 2026 Anish Krishnan. IT Infrastructure | Linux | Cloud & DevOps</p>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}

export default App;
