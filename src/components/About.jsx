import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import profileImg from "../assets/profile2.jpg";
import linkedinIcon from "../assets/linkedin.webp";
import instagramIcon from "../assets/insta.webp";
import githubIcon from "../assets/github.svg";
import leetcodeIcon from "../assets/leetcode.svg";
import hackerrankIcon from "../assets/HackerRank.png";
import googleCloudIcon from "../assets/google-cloud.svg";
import kaggleIcon from "../assets/kaggle.svg";
import emailIcon from "../assets/email.webp";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in effect shortly after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 100); // Let layout stabilize first

    return () => clearTimeout(scrollTimeout);
  }, []);

  return (
    <section
      className={`about-section ${isVisible ? "visible" : ""}`}
      id="aboutSection"
    >
      {/* Content */}
      <div className="about-text">
        <h2 className="about-name">Manshi Rathour</h2>
        <h5 className="about-title">
          <em>
            AI Full Stack Web Developer &<br />
            Aspiring Data Scientist
          </em>
        </h5>
        <p className="about-description">
          I am a results-driven professional specializing in machine learning,
          deep learning, NLP, LLMs, Gen AI, and AI agents, with expertise in
          full-stack web development. I combine these technologies with web
          development to build intelligent, data-driven applications, leveraging
          cloud technologies to create secure, scalable solutions for complex
          challenges. Passionate about advancing my AI knowledge, I am committed
          to continuous learning through hands-on projects, coursework, and
          contributions to platforms like GitHub, LeetCode, GfG, and Kaggle.
        </p>

        {/* Social Links */}
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/manshi-rathour-bb0b87272/"
            target="_blank"
            title="LinkedIn"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" width={40} height={40} />
          </a>
          <a
            href="https://www.instagram.com/_rathour_manshi?igsh=NzFvbXlzMjduZGY4"
            target="_blank"
            title="Instagram"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" width={40} height={40} />
          </a>
          <a
            href="https://github.com/Manshi-Rathour"
            target="_blank"
            title="GitHub"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="GitHub" width={40} height={40} />
          </a>
          <a
            href="https://leetcode.com/Manshi_Rathour/"
            target="_blank"
            title="LeetCode"
            rel="noopener noreferrer"
          >
            <img src={leetcodeIcon} alt="LeetCode" width={40} height={40} />
          </a>
          <a
            href="https://www.hackerrank.com/profile/manshi2086"
            target="_blank"
            title="HackerRank"
            rel="noopener noreferrer"
          >
            <img src={hackerrankIcon} alt="HackerRank" width={40} height={40} />
          </a>
          <a
            href="https://www.cloudskillsboost.google/public_profiles/9e93b857-0177-42eb-bb35-2188dfd7b79e"
            target="_blank"
            title="Google Cloud"
            rel="noopener noreferrer"
          >
            <img
              src={googleCloudIcon}
              alt="Google Cloud"
              width={40}
              height={40}
            />
          </a>
          <a
            href="https://www.kaggle.com/manshirathour"
            target="_blank"
            title="Kaggle"
            rel="noopener noreferrer"
          >
            <img src={kaggleIcon} alt="Kaggle" width={40} height={40} />
          </a>
          <a
            href="mailto:manshi2086@gmail.com"
            target="_blank"
            title="Email"
            rel="noopener noreferrer"
          >
            <img src={emailIcon} alt="Email" width={40} height={40} />
          </a>
        </div>

        <div className="resume-link">
          <a
            href="https://docs.google.com/document/d/10-1bY9eYsq21-Al1a4Uun1TJftD7_kAo/edit?usp=sharing&ouid=112546153726466097881&rtpof=true&sd=true"
            target="_blank"
            className="resume-button"
            rel="noopener noreferrer"
          >
            See My Resume
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div className="about-image-container">
        <div className="profile-image-wrapper">
          <img src={profileImg} alt="Manshi Rathour" />
        </div>
      </div>
    </section>
  );
};

export default About;
