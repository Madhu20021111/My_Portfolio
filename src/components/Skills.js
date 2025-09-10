// components/Skills.js
import React from "react";
import "./Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        {
          name: "HTML5",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          level: 90,
        },
        {
          name: "CSS3",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          level: 95,
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          level: 60,
        },
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          level: 60,
        },
        {
          name: "Bootstrap",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
          level: 50,
        },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          level: 75,
        },
        // {
        //   name: "Express",
        //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        //   level: 70,
        // },
        // {
        //   name: "Python",
        //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        //   level: 65,
        // },
        {
          name: "Java",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
          level: 75,
        },
      ],
    },
    {
      title: "Database & Tools",
      skills: [
        // {
        //   name: "MongoDB",
        //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        //   level: 70,
        // },
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
          level: 85,
        },
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          level: 80,
        },
        {
          name: "GitHub",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
          level: 85,
        },
        {
          name: "VS Code",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
          level: 90,
        },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-background">
        <div className="floating-shapes shape-1"></div>
        <div className="floating-shapes shape-2"></div>
        <div className="floating-shapes shape-3"></div>
      </div>
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">
          Technologies I work with to bring ideas to life
        </p>

        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="skill-category"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="category-title">
                <span className="title-icon"></span>
                {category.title}
              </h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="skill-item"
                    data-aos="zoom-in"
                    data-aos-delay={skillIndex * 50}
                  >
                    <div className="skill-header">
                      <div className="skill-icon">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="icon-img"
                        />
                      </div>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-progress">
                      <div
                        className="skill-progress-bar"
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="progress-indicator"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="additional-skills">
          <h3 className="additional-title">Also Familiar With</h3>
          <div className="skills-tags">
            {[
              "figma",
              "jQuery",
              "Sass",
              "Responsive Design",
              "UI/UX Principles",
              "Problem Solving",
              "Agile Methodology",
            ].map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
