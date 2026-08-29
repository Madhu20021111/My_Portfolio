// components/Skills.js
import React from "react";
import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaMobileAlt,
  FaDatabase,
  FaPaintBrush,
  FaTools,
  FaLayerGroup,
  FaJava,
  FaNetworkWired,
  FaMobile
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiC,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiExpo,
  SiMongodb,
  SiMysql,
  SiSqlite,
  SiFigma,
  SiCanva,
  SiGit,
  SiGithub,
  SiAndroidstudio,
  SiIntellijidea,
  SiFirebase,
  SiWebrtc,
  SiGithubactions
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import "./Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      id: "languages",
      title: "Languages",
      icon: <FaCode />,
      color: "#00d4ff",
      description: "Core programming and scripting languages",
      skills: [
        { name: "JavaScript", icon: <SiJavascript style={{ color: "#F7DF1E" }} /> },
        { name: "TypeScript", icon: <SiTypescript style={{ color: "#3178C6" }} /> },
        { name: "Python", icon: <SiPython style={{ color: "#3776AB" }} /> },
        { name: "Java", icon: <FaJava style={{ color: "#E76F00" }} /> },
        { name: "C", icon: <SiC style={{ color: "#A8B9CC" }} /> }
      ]
    },
    {
      id: "frontend",
      title: "Frontend",
      icon: <FaLaptopCode />,
      color: "#61DAFB",
      description: "Modern web UI frameworks & styles",
      skills: [
        { name: "React.js", icon: <SiReact style={{ color: "#61DAFB" }} /> },
        { name: "Next.js", icon: <SiNextdotjs style={{ color: "#ffffff" }} /> },
        { name: "HTML5", icon: <SiHtml5 style={{ color: "#E34F26" }} /> },
        { name: "CSS3", icon: <SiCss3 style={{ color: "#1572B6" }} /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss style={{ color: "#06B6D4" }} /> }
      ]
    },
    {
      id: "backend",
      title: "Backend",
      icon: <FaServer />,
      color: "#339933",
      description: "Server architecture & API development",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs style={{ color: "#339933" }} /> },
        { name: "Express.js", icon: <SiExpress style={{ color: "#ffffff" }} /> },
        { name: "REST APIs", icon: <FaNetworkWired style={{ color: "#00d4ff" }} /> }
      ]
    },
    {
      id: "mobile",
      title: "Mobile",
      icon: <FaMobileAlt />,
      color: "#9333ea",
      description: "Cross-platform mobile apps",
      skills: [
        { name: "React Native", icon: <SiReact style={{ color: "#61DAFB" }} /> },
        { name: "Expo", icon: <SiExpo style={{ color: "#ffffff" }} /> }
      ]
    },
    {
      id: "databases",
      title: "Databases",
      icon: <FaDatabase />,
      color: "#47A248",
      description: "Relational & NoSQL data stores",
      skills: [
        { name: "MongoDB", icon: <SiMongodb style={{ color: "#47A248" }} /> },
        { name: "MySQL", icon: <SiMysql style={{ color: "#4479A1" }} /> },
        { name: "SQLite", icon: <SiSqlite style={{ color: "#003B57" }} /> }
      ]
    },
    {
      id: "uiux",
      title: "UI/UX",
      icon: <FaPaintBrush />,
      color: "#F24E1E",
      description: "Design systems & prototyping",
      skills: [
        { name: "Figma", icon: <SiFigma style={{ color: "#F24E1E" }} /> },
        { name: "Canva", icon: <SiCanva style={{ color: "#00C4CC" }} /> },
        { name: "Responsive Design", icon: <FaMobile style={{ color: "#00d4ff" }} /> }
      ]
    },
    {
      id: "tools",
      title: "Tools",
      icon: <FaTools />,
      color: "#F05032",
      description: "Development & collaboration tooling",
      skills: [
        { name: "Git", icon: <SiGit style={{ color: "#F05032" }} /> },
        { name: "GitHub", icon: <SiGithub style={{ color: "#ffffff" }} /> },
        { name: "VS Code", icon: <VscCode style={{ color: "#007ACC" }} /> },
        { name: "Android Studio", icon: <SiAndroidstudio style={{ color: "#3DDC84" }} /> },
        { name: "IntelliJ IDEA", icon: <SiIntellijidea style={{ color: "#FE315D" }} /> }
      ]
    },
    {
      id: "other",
      title: "Other",
      icon: <FaLayerGroup />,
      color: "#FFCA28",
      description: "Authentication, cloud & real-time protocols",
      skills: [
        { name: "Firebase", icon: <SiFirebase style={{ color: "#FFCA28" }} /> },
        { name: "WebRTC", icon: <SiWebrtc style={{ color: "#00d4ff" }} /> },
        { name: "GitHub Actions", icon: <SiGithubactions style={{ color: "#2088FF" }} /> }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      {/* Ambient glowing background shapes */}
      <div className="skills-background">
        <div className="floating-shapes shape-1"></div>
        <div className="floating-shapes shape-2"></div>
        <div className="floating-shapes shape-3"></div>
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="skills-header-wrapper">
          <h2 className="section-title">My Skills</h2>
          <p className="skills-subtitle">
            A comprehensive tech stack honed through full-stack development, mobile applications, cloud integrations, and competitive hackathons.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-modern-grid">
          {skillCategories.map((category) => (
            <div key={category.id} className="skill-category-card">
              <div 
                className="category-card-top-accent" 
                style={{ background: `linear-gradient(90deg, transparent, ${category.color}, transparent)` }}
              ></div>

              {/* Category Header */}
              <div className="category-card-header">
                <div 
                  className="category-icon-wrapper"
                  style={{ 
                    borderColor: `${category.color}40`,
                    boxShadow: `0 0 15px ${category.color}25`
                  }}
                >
                  <span className="category-header-icon" style={{ color: category.color }}>
                    {category.icon}
                  </span>
                </div>
                <div className="category-title-block">
                  <h3 className="category-card-title">{category.title}</h3>
                  <span className="category-card-desc">{category.description}</span>
                </div>
              </div>

              {/* Skills Tags Grid */}
              <div className="skills-chips-wrapper">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="skill-badge-chip">
                    <span className="skill-chip-icon">{skill.icon}</span>
                    <span className="skill-chip-name">{skill.name}</span>
                  </div>
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
