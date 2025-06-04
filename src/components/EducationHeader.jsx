import React, { useEffect, useState } from "react";
import expImage from "../assets/graduation.webp";
import leetcodeIcon from "../assets/leetcode.svg";
import googleCloudIcon from "../assets/google-cloud.svg";
import kaggleIcon from "../assets/kaggle.svg";
import hackerRankIcon from "../assets/HackerRank.png";
import "../styles/Education.css";


const EducationHeader = () => {
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
      id="education-header"
      className={`education-header-container ${isVisible ? "visible" : ""}`}
    >
      <div className="education-header-image education-header-item">
        <img src={expImage} alt="Education Visual" />
      </div>
      <div className="education-header-content education-header-item">
        <h1 className="education-header-title">Education</h1>
        <div className="education-header-description">
          <h4 id="edu-desc">Basic Qualification and Certifications</h4>
          <div className="edu-icons">
            <a
              href="https://leetcode.com/Manshi_Rathour/"
              target="_blank"
              rel="noopener noreferrer"
              title="LeetCode"
            >
              <img src={leetcodeIcon} alt="LeetCode Icon" />
            </a>
            <a
              href="https://www.cloudskillsboost.google/public_profiles/9e93b857-0177-42eb-bb35-2188dfd7b79e"
              target="_blank"
              rel="noopener noreferrer"
              title="Google Cloud"
            >
              <img src={googleCloudIcon} alt="Google Cloud Icon" />
            </a>
            <a
              href="https://www.kaggle.com/manshirathour"
              target="_blank"
              rel="noopener noreferrer"
              title="Kaggle"
            >
              <img src={kaggleIcon} alt="Kaggle Icon" />
            </a>
            <a
              href="https://www.hackerrank.com/profile/manshi2086"
              target="_blank"
              rel="noopener noreferrer"
              title="Hackerrank"
            >
              <img src={hackerRankIcon} alt="HackerRank Icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationHeader;
