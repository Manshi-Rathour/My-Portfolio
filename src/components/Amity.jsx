import React from "react";
import amityLogo from "../assets/amityp.png";
import "../styles/Education.css";

const Amity = () => {
  return (
    <div id="clg">
      <div id="amity-logo">
        <img src={amityLogo} alt="Amity Logo" />
      </div>
      <div className="card" id="card-container">
        <div className="card-header clg-name">
          <h3 className="clg-title">Amity University Patna</h3>
          <h6 className="clg-subtitle">B.Tech. in Computer Science Engineering</h6>
          <p className="clg-date">(2022 - present)</p>
        </div>
        <div className="card-body clg-details">
          <p className="card-text">
            ⚡ I am studying fundamental software engineering subjects, including C, C++, Java, Python, AI, DSA, OS, TOC, DBMS, Networking, etc.
          </p>
          <p className="card-text">
            ⚡ In addition to my academic coursework, I am expanding my skills in Data Science, ML, DL, NLP, LLMs, Gen AI, AI agents and Full Stack Web Development.
          </p>
          <a
            href="https://amity.edu/Bihar/"
            className="visit-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default Amity;
