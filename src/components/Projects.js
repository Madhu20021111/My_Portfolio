// components/Projects.js
import React, { useState } from "react";
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaCode, 
  FaSearch,
  FaTimes
} from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiJavascript
} from "react-icons/si";
import "./Projects.css";

// Import project images
import project01 from "../images/Project01.png";
import project02 from "../images/Project02.jpg";
import project03 from "../images/Project03.png";
import project04 from "../images/Project04.png";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const projects = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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

  const categories = ["All", "Full Stack", "Frontend"];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeFilter === "All" || project.category === activeFilter;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(tech => tech.name.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

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

        {/* Filter Pills */}
        <div className="projects-filter-bar">
          <div className="projects-category-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`proj-filter-btn ${activeFilter === cat ? "active" : ""}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat === "All" ? "All Projects" : cat}
                <span className="proj-pill-count">
                  {cat === "All" ? projects.length : projects.filter(p => p.category === cat).length}
                </span>
              </button>
            ))}
          </div>

          <div className="projects-search-box">
            <FaSearch className="proj-search-icon" />
            <input 
              type="text" 
              placeholder="Search tech or project..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search projects"
            />
            {searchQuery && (
              <button className="proj-clear-btn" onClick={() => setSearchQuery("")}>
                <FaTimes />
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="projects-cards-grid">
            {filteredProjects.map((project) => (
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
        ) : (
          <div className="no-projects-found">
            <p>No projects match your filter "{searchQuery}".</p>
            <button 
              className="proj-reset-btn"
              onClick={() => { setSearchQuery(""); setActiveFilter("All"); }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
