// components/Projects.js
import React from "react";
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaCode 
} from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiFirebase,
  SiWebrtc,
  SiGoogle,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiSqlite,
  SiJavascript
} from "react-icons/si";
import "./Projects.css";

// Import project images
import project01 from "../images/Project01.png";
import project02 from "../images/Project02.jpg";
import project03 from "../images/Project03.png";
import project04 from "../images/Project04.png";
import project05 from "../images/Project05.png";
import project06 from "../images/Project06.png";
import Project07 from "../images/Project07.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "CraftConnect",
      subtitle: "Digital Marketplace for Sri Lankan Handicrafts",
      category: "Full Stack",
      badge: "E-Commerce",
      featured: true,
      description:
        "A digital marketplace designed to connect Sri Lankan artisans with customers through an online platform for showcasing and selling traditional handmade crafts.",
      technologies: [
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "React", icon: <SiReact style={{ color: "#61DAFB" }} /> },
        { name: "TypeScript", icon: <SiTypescript style={{ color: "#3178C6" }} /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss style={{ color: "#06B6D4" }} /> },
        { name: "Node.js", icon: <SiNodedotjs style={{ color: "#339933" }} /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "SQLite", icon: <SiSqlite /> }
      ],
      github: "https://github.com/Madhu20021111/CraftConnect",
      image: project06,
    },
        {
      id: 2,
      title: "MindCare.lk",
      subtitle: "Digital Mental Health & Counseling Platform",
      category: "Mobile",
      badge: "AI & Healthcare",
      featured: true,
      description:
        "A digital mental health and counseling platform designed to connect users with counselors through an accessible mobile experience, featuring AI-powered assistance and real-time communication.",
      technologies: [
        { name: "React Native", icon: <SiReact style={{ color: "#61DAFB" }} /> },
        { name: "Firebase", icon: <SiFirebase style={{ color: "#FFCA28" }} /> },
        { name: "WebRTC", icon: <SiWebrtc /> },
        { name: "Gemini API", icon: <SiGoogle style={{ color: "#4285F4" }} /> }
      ],
      github: "https://github.com/Madhu20021111/MindCare.lk",
      image: project05,
    },
        {
      id: 3,
      title: "MediInfo.lk",
      subtitle: "Multilingual Medicine Information Platform",
      category: "Web",
      badge: "Healthcare",
      featured: false,
      description:
        "A multilingual medicine information platform designed to help users find medicine-related information through an accessible web interface with support for Sinhala, Tamil, and English.",
      technologies: [
        { name: "React", icon: <SiReact style={{ color: "#61DAFB" }} /> },
        { name: "JavaScript", icon: <SiJavascript style={{ color: "#F7DF1E" }} /> },
        { name: "HTML5", icon: <SiHtml5 style={{ color: "#E34F26" }} /> },
        { name: "CSS3", icon: <SiCss3 style={{ color: "#1572B6" }} /> }
      ],
      github: "https://github.com/gavirubihan/MediInfo.lk",
      image: Project07,
    },
    {
      id: 4,
      title: "SmartToDo",
      subtitle: "Full-Stack Task & Productivity Hub",
      category: "Full Stack",
      badge: "MERN Stack",
      featured: true,
      description: "An intuitive task management application designed to streamline daily productivity with secure authentication, task categorization, and seamless CRUD operations.",
      technologies: [
        { name: "React", icon: <SiReact style={{ color: "#61DAFB" }} /> },
        { name: "Node.js", icon: <SiNodedotjs style={{ color: "#339933" }} /> },
        { name: "Express.js", icon: <SiExpress style={{ color: "#ffffff" }} /> },
        { name: "MongoDB", icon: <SiMongodb style={{ color: "#47A248" }} /> },
        { name: "JavaScript", icon: <SiJavascript style={{ color: "#F7DF1E" }} /> },
        { name: "CSS3", icon: <SiCss3 style={{ color: "#1572B6" }} /> }
      ],
      github: "https://github.com/Madhu20021111/SmartToDo",
      demo: "https://github.com/Madhu20021111/SmartToDo",
      image: project04,
    },
    {
      id: 5,
      title: "Job Tracker",
      subtitle: "Career Application & Interview Portal",
      category: "Frontend",
      badge: "React Web App",
      featured: true,
      description: "A comprehensive career portal enabling job seekers to track active applications, optimize resumes, organize interviews, and manage career pipelines effectively.",
      technologies: [
        { name: "React", icon: <SiReact style={{ color: "#61DAFB" }} /> },
        { name: "JavaScript", icon: <SiJavascript style={{ color: "#F7DF1E" }} /> },
        { name: "CSS3", icon: <SiCss3 style={{ color: "#1572B6" }} /> }
      ],
      github: "https://github.com/Madhu20021111/Job_Tracker",
      demo: "https://github.com/Madhu20021111/Job_Tracker",
      image: project03,
    },
    {
      id: 6,
      title: "DineIn Restaurant Portal",
      subtitle: "Culinary Experience & Food Ordering System",
      category: "Full Stack",
      badge: "Ballerina & NoSQL",
      featured: false,
      description: "A sophisticated restaurant management and dining menu web application offering seamless menu exploration and cloud-native backend integration.",
      technologies: [
        { name: "MongoDB", icon: <SiMongodb style={{ color: "#47A248" }} /> },
        { 
          name: "Ballerina", 
          icon: <img src="https://ballerina.io/img/ballerina-logo.svg" alt="Ballerina" className="tech-custom-svg" /> 
        },
        { name: "JavaScript", icon: <SiJavascript style={{ color: "#F7DF1E" }} /> },
        { name: "HTML5", icon: <SiHtml5 style={{ color: "#E34F26" }} /> },
        { name: "CSS3", icon: <SiCss3 style={{ color: "#1572B6" }} /> }
      ],
      github: "https://github.com/Madhu20021111/restaurants-foodmenu",
      demo: "https://github.com/Madhu20021111/restaurants-foodmenu",
      image: project02,
    },
    {
      id: 7,
      title: "Happy Coffee",
      subtitle: "Artisan Coffee Experience & Storefront",
      category: "Frontend",
      badge: "Interactive UI",
      featured: false,
      description: "A vibrant, responsive coffee shop storefront built with semantic HTML5, modern CSS3 animations, and interactive JavaScript features.",
      technologies: [
        { name: "HTML5", icon: <SiHtml5 style={{ color: "#E34F26" }} /> },
        { name: "CSS3", icon: <SiCss3 style={{ color: "#1572B6" }} /> },
        { name: "JavaScript", icon: <SiJavascript style={{ color: "#F7DF1E" }} /> }
      ],
      github: "https://github.com/Madhu20021111/coffee-shop",
      demo: "https://github.com/Madhu20021111/coffee-shop",
      image: project01,
    },
    
  ];

  return (
    <section id="projects" className="projects">
      {/* Ambient background glows */}
      <div className="projects-ambient-glow glow-p1"></div>
      <div className="projects-ambient-glow glow-p2"></div>

      <div className="container">
        {/* Header */}
        <div className="projects-header-wrapper">
          <h2 className="section-title">Featured Projects</h2>
          <p className="projects-subtitle">
            A showcase of full-stack web applications, frontend architectures, and interactive digital solutions built with modern technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-cards-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-cyber-card">
              {/* Glowing Top Accent Line */}
              <div className="project-card-top-glow"></div>

              {/* Project Image Container */}
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-main-image"
                  loading="lazy"
                />
                <div className="project-image-gradient"></div>

                {/* Badge */}
                <div className="project-tag-pill">
                  <span className="project-badge-text">{project.badge}</span>
                </div>

                {/* Hover Overlay Buttons */}
                <div className="project-hover-overlay">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-action-btn github-btn"
                    title="View GitHub Repository"
                  >
                    <FaGithub className="btn-icon" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>

              {/* Project Body */}
              <div className="project-card-content">
                <div className="project-title-row">
                  <h3 className="project-name">{project.title}</h3>
                  <span className="project-category-tag">{project.category}</span>
                </div>
                <span className="project-sub-headline">{project.subtitle}</span>

                <p className="project-description-text">{project.description}</p>

                {/* Tech Stack Chips */}
                <div className="project-tech-stack">
                  <span className="tech-stack-label">Technologies:</span>
                  <div className="tech-chips-group">
                    {project.technologies.map((tech, i) => (
                      <div key={i} className="project-tech-chip" title={tech.name}>
                        <span className="tech-chip-icon">{tech.icon}</span>
                        <span className="tech-chip-label">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="project-card-footer">
                  <a
                    href={project.github}
                    className="project-primary-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaCode className="link-icon" />
                    <span>Explore Repository</span>
                    <FaExternalLinkAlt className="external-arrow-icon" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
