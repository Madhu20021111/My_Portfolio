// components/Projects.js
import React from 'react';
import './Projects.css';

// Import your project images
import project01 from '../images/Project01.png';
import project02 from '../images/Project02.jpg'; 
import project03 from '../images/Project03.png'; 

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A web application for managing tasks with user authentication.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/Madhu20021111/coffee-shop",
      image: project01
    },
    {
      title: "Project 2",
      description: "E-commerce website with product filtering and cart functionality.",
      technologies: ["HTML", "CSS", "MongoDB", "Ballerina", "JavaScript"],
      link: "https://github.com/Madhu20021111/restaurants-foodmenu",
      image: project02
    },
    {
      title: "Project 3",
      description: "University management system for tracking students and courses.",
      technologies: ["React", "CSS", "JavaScript"],
      link: "https://github.com/Madhu20021111/Job_Tracker",
      image: project03
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
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