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
              <h2>C-DAC Patna</h2>
              <h4>AI Intern</h4>
              <p>
                Engineered MCP and RAG-based AI systems using FastAPI, MongoDB, SQL, LangChain, FAISS, Elasticsearch, and Llama 3, built multilingual speech-to-text pipelines with Vosk and Qwen, and deployed GPU-accelerated AI solutions on C-DAC's HPC infrastructure.
              </p>
            </div>
            <div className="time">
              <h4>Jan 2026 - Jul 2026</h4>
            </div>
          </li>

          <li>
            <div className="content">
              <h2>MDev Solutions</h2>
              <h4>AI Developer</h4>
              <p>
                Worked on AI agents, workflow automation, and full-stack web development to build intelligent, automated solutions.
              </p>
            </div>
            <div className="time">
              <h4>Apr 2025 - Jul 2025</h4>
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
              <h4>Jun 2024 - Aug 2024</h4>
            </div>
          </li>

          <li>
            <div className="content">
              <h2>Orbitor</h2>
              <h4>Machine Learning Intern</h4>
              <p>
                Created a movie recommendation system using TF-IDF and cosine similarity, developed a Bangalore house price prediction model, and built an SVM-based Iris classifier with 96% accuracy.
              </p>
            </div>
            <div className="time">
              <h4>Mar 2024 - Apr 2024</h4>
            </div>
          </li>

          <li>
            <div className="content">
              <h2>Oasis Infobyte</h2>
              <h4>Data Science Intern</h4>
              <p>
                Built a sales prediction model with 91.8% accuracy, analyzed COVID-19's impact on unemployment, and developed ML and NLP models including an email spam detector with 98% accuracy.
              </p>
            </div>
            <div className="time">
              <h4>Aug 2023 - Oct 2023</h4>
            </div>
          </li>

          <div style={{ clear: "both" }}></div>
        </ul>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
