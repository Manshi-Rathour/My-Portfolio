import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import JournalIcon from "../assets/journal-bookmark-fill.svg";
import PythonIcon from "../assets/icons8-python.svg";
import OpenAIIcon from "../assets/openai.svg";
import StreamlitIcon from "../assets/streamlit.svg";
import GithubIcon from "../assets/github.svg";
import MongoDBIcon from "../assets/mongodb.svg";
import MySQLIcon from "../assets/mysql.webp";
import NumpyIcon from "../assets/icons8-numpy.svg";
import PandasIcon from "../assets/icons8-pandas.svg";
import JupyterIcon from "../assets/jupyter.svg";
import Langchain from "../assets/langchain.jpeg";
import GoogleCloud from "../assets/google-cloud.svg";

const MotionRow = ({ children }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="project-row"
      initial={{ opacity: 0, y: 80 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const AllProjects = () => {
  return (
    <>
      <div id="allprojects">
        <MotionRow>
          <div className="project-row">
            <div className="project-card">
              <Link
                to="https://github.com/Manshi-Rathour/FilesGPT"
                target="_blank"
                className="animated-card"
              >
                <div className="card animate-content">
                  <div className="card-body">
                    <h4 className="card-title">
                      <img src={JournalIcon} alt="icon" /> FilesGPT
                    </h4>
                    <p className="card-text">
                      🔥 It is a personalized document intelligence platform built with Python, FastAPI, React, and MongoDB that enables secure querying of PDFs, images, scanned documents, and URLs. It leverages OCR and text-processing pipelines along with a LangChain-based RAG architecture to deliver accurate, context-aware AI responses from user data.
                    </p>
                    <div className="icons">
                      <img src={PythonIcon} alt="python" />

                      <img
                        src="https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png"
                        alt="fastapi"
                        style={{ width: 100, height: 40 }}
                      />

                      <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                        alt="react"
                        style={{ width: 40, height: 40 }}
                      />

                      <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                        alt="mongodb"
                        style={{ width: 40, height: 40 }}
                      />

                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/5/55/Pinecone-Full-Logo-Black.svg"
                        alt="pinecone"
                        style={{ width: 100, height: 40 }}
                      />

                      <img
                        src={Langchain}
                        alt="langchain"
                        style={{ width: 120 }}
                      />

                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="project-card">
              <a
                href="https://github.com/Manshi-Rathour/GitaBot"
                target="_blank"
                rel="noopener noreferrer"
                className="animated-card"
              >
                <div className="card animate-content">
                  <div className="card-body">
                    <h4 className="card-title">
                      <img src={JournalIcon} alt="bookmark" /> GitaBot
                    </h4>
                    <p className="card-text">
                      🔥 Developed GitaBot, a multilingual and sentiment-aware chatbot inspired by the Bhagavad Gita, delivering contextual spiritual insights. Integrated voice and text support along with 10+ languages using Python, Flask, Groq API, NLTK, and GCP Translation API to enhance accessibility and user experience.
                    </p>

                    <div className="icons">
                      <img src={PythonIcon} alt="python" />
                      <img src={GoogleCloud} alt="google cloud" />
                      <img
                        src={Langchain}
                        alt="langchain"
                        style={{ width: 120 }}
                      />
                      <img src={JupyterIcon} alt="jupyter notebook" />
                      <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                        alt="html5"
                      />
                      <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                        alt="css3"
                      />
                      <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                        alt="javascript"
                      />
                      <img
                        src="https://img.icons8.com/color/512/flask.png"
                        alt="fastapi"
                        style={{ width: 50, height: 40 }}
                      />
                    </div>
                  </div>
                </div>
              </a>
            </div>

          </div>
        </MotionRow>

        <MotionRow>
          <div className="project-row">

            <div className="project-card">
              <a
                href="https://github.com/Manshi-Rathour/Real-Estate-Price-Prediction"
                target="_blank"
                rel="noopener noreferrer"
                className="animated-card"
              >
                <div className="card animate-content">
                  <div className="card-body">
                    <h4 className="card-title">
                      <img src={JournalIcon} alt="bookmark" /> Real Estate Price
                      Prediction
                    </h4>
                    <p className="card-text">
                      🏡 Built a real estate price prediction model for Bangalore houses using Python, Flask, and linear regression. The platform provides accurate price estimates based on area, rooms, bathrooms, and location, with an interactive interface that improves usability and engagement.
                    </p>


                    <div className="icons">
                      <img src={PythonIcon} alt="python" />
                      <img src={NumpyIcon} alt="numpy" />
                      <img src={PandasIcon} alt="pandas" />
                      <img
                        src="https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png"
                        alt="scikit-learn"
                        style={{ width: 100, height: 40 }}
                      />
                      <img src={JupyterIcon} alt="jupyter notebook" />
                      <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                        alt="html5"
                      />
                      <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                        alt="css3"
                      />
                      <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                        alt="javascript"
                      />
                      <img
                        src="https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png"
                        alt="fastapi"
                        style={{ width: 100, height: 40 }}
                      />
                      <img
                        src="https://arunpotti.files.wordpress.com/2021/12/microsoft_azure.svg_.png"
                        alt="azure"
                      />
                      <img
                        src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                        alt="postman"
                      />
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="project-card">
              <Link
                to="https://github.com/Manshi-Rathour/Ecommerce-DataEngineering"
                target="_blank"
                className="animated-card"
              >
                <div className="card animate-content">
                  <div className="card-body">
                    <h4 className="card-title">
                      <img src={JournalIcon} alt="icon" /> E-commerce Data
                      Engineering
                    </h4>
                    <p className="card-text">
                      🔥 Designed and implemented a cloud-based big data engineering pipeline on
                      Azure using ADF, ADLS, Databricks, and Synapse for efficient data ingestion,
                      transformation, and exploratory data analysis. The pipeline integrates data
                      from multiple sources including SQL databases, MongoDB, and GitHub to enable
                      scalable and reliable analytics.
                    </p>
                    <div className="icons">
                      <img src={PythonIcon} alt="python" />
                      <img
                        src="https://swimburger.net/media/ppnn3pcl/azure.png"
                        alt="azure"
                      />
                      <img src={MySQLIcon} alt="sql" />
                      <img src={MongoDBIcon} alt="mongodb" />
                      <img src={GithubIcon} alt="github" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </MotionRow>

        <MotionRow>
          <div className="project-row">
            <div className="project-card">
              <a
                href="https://github.com/Manshi-Rathour/QnA-using-LLM"
                target="_blank"
                rel="noopener noreferrer"
                className="animated-card"
              >
                <div className="card animate-content">
                  <div className="card-body">
                    <h4 className="card-title">
                      <img src={JournalIcon} alt="bookmark" /> QnA System using
                      LLM
                    </h4>
                    <p className="card-text">
                      ❓Built an advanced Q&A system trained on the CodeBasics
                      dataset using Google PaLM and GenAI. Implemented text
                      embeddings with HuggingFace InstructEmbeddings and used
                      FAISS as a vector database to enable accurate,
                      context-aware querying and fine-tuned responses.
                    </p>

                    <div className="icons">
                      <img src={PythonIcon} alt="python" />
                      <img src={GoogleCloud} alt="google cloud" />
                      <img
                        src="https://workable-application-form.s3.amazonaws.com/advanced/production/61557f91d9510741dc62e7f8/c3635b59-a3d2-444a-b636-a9d0061dcdde"
                        alt="hugging face"
                      />
                      <img
                        src={Langchain}
                        alt="langchain"
                        style={{ width: 120 }}
                      />
                      <img
                        src={StreamlitIcon}
                        alt="streamlit"
                        style={{ width: 120, height: 40 }}
                      />
                      <img src={JupyterIcon} alt="jupyter notebook" />
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="project-card">
              <Link
                to="https://github.com/Manshi-Rathour/Financial-AI-Analyst"
                target="_blank"
                className="animated-card"
              >
                <div className="card animate-content">
                  <div className="card-body">
                    <h4 className="card-title">
                      <img src={JournalIcon} alt="icon" /> Financial-AI-Analyst
                    </h4>
                    <p className="card-text">
                      🔥 Built an AI-driven financial analysis platform that delivers real-time
                      stock data, market news, and analyst insights. The system leverages Streamlit
                      for the interface and LLaMA-3 agents powered by YFinance and DuckDuckGo tools
                      to provide intelligent, up-to-date financial insights.
                    </p>

                    <div className="icons">
                      <img src={PythonIcon} alt="python" />
                      <img
                        src="https://raw.githubusercontent.com/RMNCLDYO/groq-ai-toolkit/main/.github/groq-logo.png"
                        alt="groq"
                        style={{ width: "70px", height: "30px" }}
                      />
                      <img
                        src={OpenAIIcon}
                        alt="openai"
                        style={{ width: "60px" }}
                      />
                      <img
                        src="https://mintlify.s3.us-west-1.amazonaws.com/phidata/logo/light.svg"
                        alt="phidata"
                        style={{ width: "100px" }}
                      />
                      <img
                        src={StreamlitIcon}
                        alt="streamlit"
                        style={{ width: "120px", height: "40px" }}
                      />
                      <img
                        src="https://cdn4.vectorstock.com/i/1000x1000/35/73/yf-logo-with-triangle-shape-and-circle-vector-30143573.jpg"
                        alt="yfinance"
                      />
                      <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/9/90/The_DuckDuckGo_Duck.png/1200px-The_DuckDuckGo_Duck.png"
                        alt="duckduckgo"
                        style={{ width: "50px" }}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </MotionRow>
      </div>
      <div id="moreproj">
        <a
          class="btn"
          href="https://github.com/Manshi-Rathour"
          role="button"
          target="_blank"
        >
          More Projects
        </a>
      </div>
    </>
  );
};

export default AllProjects;
