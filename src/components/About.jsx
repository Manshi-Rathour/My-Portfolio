import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import profileImg from "../assets/profile1.png";
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
            Full Stack AI Developer
          </em>
        </h5>
        <p className="about-description">
          I am a Full-Stack AI Developer with hands-on experience designing and deploying production-ready AI applications. My expertise spans Machine Learning, Deep Learning, LLMs, RAG, AI Agents, and automation, along with Python, FastAPI, React, MySQL, Docker, and AWS. I enjoy building scalable, intelligent systems from predictive ML models to modern generative AI applications with a strong focus on clean architecture, performance, and delivering real-world impact.
        </p>

        {/* Social Links */}
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/manshi-rathour/"
            target="_blank"
            title="LinkedIn"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/Manshi-Rathour"
            target="_blank"
            title="GitHub"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a
            href="https://leetcode.com/Manshi_Rathour/"
            target="_blank"
            title="LeetCode"
            rel="noopener noreferrer"
          >
            <img src={leetcodeIcon} alt="LeetCode" />
          </a>
          <a
            href="https://www.hackerrank.com/profile/manshi2086"
            target="_blank"
            title="HackerRank"
            rel="noopener noreferrer"
          >
            <img src={hackerrankIcon} alt="HackerRank" />
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
            <img src={kaggleIcon} alt="Kaggle" />
          </a>
          <a
            href="mailto:manshi2086@gmail.com"
            target="_blank"
            title="Email"
            rel="noopener noreferrer"
          >
            <img src={emailIcon} alt="Email" />
          </a>
        </div>

        <div className="resume-link">
          <a
            href="https://drive.google.com/file/d/1GpU2vrn0sA0ySl2zX9K9t2NW2pgwxUdY/view?usp=sharing"
            target="_blank"
            className="resume-button"
            rel="noopener noreferrer"
          >
            My Resume
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
