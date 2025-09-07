// components/Skills.js
import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "Java", "Python", "HTML/CSS"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Node.js", "Express", "Bootstrap"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "MySQL", "MongoDB", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skill-list">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;