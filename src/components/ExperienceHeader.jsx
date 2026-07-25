import React, { useEffect, useState } from "react";
import expImage from "../assets/work.png";
import "../styles/Experience.css";

const ExperienceHeader = () => {
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
      id="experience-header"
      className={`experience-header-container ${isVisible ? "visible" : ""}`}
    >
      <div className="experience-header-image experience-header-item">
        <img src={expImage} alt="Experience Visual" />
      </div>
      <div className="experience-header-content experience-header-item">
        <h1 className="experience-header-title">Experience</h1>
        <p className="experience-header-description">
          I’ve completed internships in Data Science, Machine Learning, Backend Development (Python), AI, AI Agents, and Automation. I'm actively seeking opportunities in these domains, with a passion for building intelligent, data-driven solutions that solve real-world problems and create meaningful impact.
        </p>
      </div>
    </div>
  );
};

export default ExperienceHeader;
