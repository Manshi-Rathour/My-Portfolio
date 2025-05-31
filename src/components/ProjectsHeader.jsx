import React, { useEffect, useState } from "react";
import projectImage from "../assets/project.webp";
import "../styles/Projects.css";

const ProjectsHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 100);
    return () => clearTimeout(scrollTimeout);
  }, []);

  return (
    <div
      id="projects-header"
      className={`projects-header-container ${isVisible ? "visible" : ""}`}
    >
      <div className="projects-header-image project-header-item">
        <img src={projectImage} alt="Project Visual" />
      </div>
      <div className="projects-header-content project-header-item">
        <h1 className="projects-header-title">Projects</h1>
        <p className="projects-header-description">
          My projects utilize a diverse range of technology tools. I have
          experience in developing AI-related projects, integrating them into
          web applications, and deploying them on cloud platforms.
        </p>
      </div>
    </div>
  );
};

export default ProjectsHeader;
