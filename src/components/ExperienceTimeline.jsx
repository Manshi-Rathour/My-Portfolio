import React from "react";
import "../styles/Experience.css";

const ExperienceTimeline = () => {
  return (
    <div className="timeline-container">
      <h1>Internships</h1>
      <div className="timeline">
        <ul>
          <li>
            <div className="content">
              <h2>Oasis Infobyte</h2>
              <h4>Data Science Intern</h4>
              <p>
                Built a sales prediction model with 91.8% accuracy and analyzed COVID-19’s impact on unemployment in India. Developed ML models for Iris classification and an NLP-based email spam detector with 98% accuracy.
              </p>
            </div>
            <div className="time">
              <h4>Aug 2023 - Oct 2023</h4>
            </div>
          </li>

          <li>
            <div className="content">
              <h2>Orbitor</h2>
              <h4>Machine Learning Intern</h4>
              <p>
                Created a movie recommendation system using TF-IDF and cosine similarity. Developed a linear regression model for Bangalore real estate prices and built an SVM-based Iris classification model with 96% accuracy.
              </p>
            </div>
            <div className="time">
              <h4>Mar 2024 - Apr 2024</h4>
            </div>
          </li>

          <li>
            <div className="content">
              <h2>Cloud Counselage</h2>
              <h4>Machine Learning Intern</h4>
              <p>
                Developed predictive models to forecast student placement outcomes and estimate graduation timelines, aiding academic planning.
              </p>
            </div>
            <div className="time">
              <h4>June 2024 - Aug 2024</h4>
            </div>
          </li>

          <li>
            <div className="content">
              <h2>MDev Solutions</h2>
              <h4>AI Engineer</h4>
              <p>
                Working on AI agents, workflow automation, and full-stack web development to build intelligent, automated solutions.
              </p>
            </div>
            <div className="time">
              <h4>April 2025 - Jul 2025</h4>
            </div>
          </li>
          <div style={{ clear: "both" }}></div>
        </ul>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
