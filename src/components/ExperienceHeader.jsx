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
          I have completed internships in Data Science, ML, Full Stack
          Development, AI Agents, and Automation. I am actively seeking
          opportunities in these areas as well as NLP and Generative AI. I’m
          passionate about using data and intelligent systems to create smart,
          automated solutions that improve efficiency and bring real value to
          users. I’m always eager to learn more and excited to contribute to
          innovative projects with the latest technologies.
        </p>
      </div>
    </div>
  );
};

export default ExperienceHeader;
