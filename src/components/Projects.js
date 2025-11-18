// components/Projects.js
import React from "react";
import "./Projects.css";

// Import your project images
import project01 from "../images/Project01.png";
import project02 from "../images/Project02.jpg";
import project03 from "../images/Project03.png";
import project04 from "../images/Project04.png";

const Projects = () => {
  const projects = [
    {
      title: "Happy Coffee",
      description: "Your Daily Dose of Happiness",
      technologies: [
        {
          name: "HTML5",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS3",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
      ],
      link: "https://github.com/Madhu20021111/coffee-shop",
      image: project01,
    },
    {
      title: "DineIn",
      description:
        "Experience culinary artistry in an atmosphere of refined elegance.",
      technologies: [
        {
          name: "HTML5",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS3",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "Ballerina",
          icon: "https://ballerina.io/img/ballerina-logo.svg", // ballerina doesn’t exist in devicon, so using official logo
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
      ],
      link: "https://github.com/Madhu20021111/restaurants-foodmenu",
      image: project02,
    },
    {
      title: "Job Tracker",
      description: "Find jobs, Fix resumes, Practice interviews",
      technologies: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "CSS3",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
      ],
      link: "https://github.com/Madhu20021111/Job_Tracker",
      image: project03,
    },
    {
      title: "SmartToDo",
      description: "Easy Go with your daily tasks",
      technologies: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "CSS3",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "Express.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
      ],
      link: "https://github.com/Madhu20021111/SmartToDo",
      image: project04,
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, i) => (
                  <div key={i} className="tech-item" title={tech.name}>
                    <img src={tech.icon} alt={tech.name} className="tech-icon" />
                    <span className="tech-name">{tech.name}</span>
                  </div>
                ))}
              </div>
              <a
                href={project.link}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
