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
  const location = useLocation();

  return (
    <>
      <div id="allprojects">
        <MotionRow>
          <div className="project-row">
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
                      🔥Designed a cloud-based big data pipeline using Azure
                      (ADF, ADLS, Databricks, Synapse) for data ingestion,
                      transformation, and EDA, integrating data from SQL,
                      MongoDB, and GitHub.
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

            <div className="project-card">
              <Link
                to="https://github.com/Manshi-Rathour/PDF-Assistant"
                target="_blank"
                className="animated-card"
              >
                <div className="card animate-content">
                  <div className="card-body">
                    <h4 className="card-title">
                      <img src={JournalIcon} alt="icon" /> PDF Assistant
                    </h4>
                    <p className="card-text">
                      🔥A Python app that lets users interact with PDFs, upload
                      custom ones, and use an interactive CLI. It works with
                      cloud or local databases and is pre-trained to help manage
                      and retrieve PDF content efficiently.
                    </p>
                    <div className="icons">
                      <img src={PythonIcon} alt="python" />
                      <img
                        src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png"
                        alt="docker"
                      />
                      <img
                        src="https://raw.githubusercontent.com/RMNCLDYO/groq-ai-toolkit/main/.github/groq-logo.png"
                        alt="groq"
                        style={{ width: "70px", height: "30px" }}
                      />
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png"
                        alt="aws"
                        style={{ width: "50px", height: "30px" }}
                      />
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png"
                        alt="PostgreSQL"
                      />
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
                      🔥An AI-powered platform delivering real-time financial
                      data, stock insights, company news, and analyst
                      recommendations through an interactive interface.
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

            <div className="project-card">
              <Link
                to="https://github.com/Manshi-Rathour/Airbnb-Clone"
                target="_blank"
                className="animated-card"
              >
                <div className="card animate-content">
                  <div className="card-body">
                    <h4 className="card-title">
                      <img src={JournalIcon} alt="icon" /> Airbnb Clone
                    </h4>
                    <p className="card-text">
                      🔥Developed an Airbnb clone with key features like a
                      searchable homepage, secure authentication, role-based
                      access, CRUD functionality, and map integration.
                    </p>
                    <div className="icons">
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
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                        alt="nodejs"
                      />
                      <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                        alt="express"
                      />
                      <img src={MongoDBIcon} alt="mongodb" />
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
                      ❓Built an advanced Q&A system for the CodeBasics dataset,
                      featuring a vector database, embedding, and models for
                      querying and fine-tuning responses based on the dataset.
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
                      🔥 Explore divine wisdom with Lord Krishna through the
                      Bhagavad Gita in an interactive chatbot that lets you ask
                      questions via text or voice and receive insightful
                      responses in both text and voice formats.
                    </p>
                    <div className="icons">
                      <img src={PythonIcon} alt="python" />
                      <img src={GoogleCloud} alt="google cloud" />
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
          </div>
        </MotionRow>

        <MotionRow>
          <div className="project-row">
            <div className="project-card">
              <a
                href="https://github.com/Manshi-Rathour/AI_Assistant"
                target="_blank"
                rel="noopener noreferrer"
                className="animated-card"
              >
                <div className="card animate-content">
                  <div className="card-body">
                    <h4 className="card-title">
                      <img src={JournalIcon} alt="bookmark" /> AI Assistant
                    </h4>
                    <p className="card-text">
                      🔶 Chatbot
                      <br />
                      🔶 Text Extraction from handwritten text in images and
                      PDFs
                      <br />
                      🔶 Text Summarization from text, images, PDFs, and web
                      pages
                      <br />
                      🔶 Real-Time Language Translation from text as well as
                      speech
                    </p>

                    <div className="icons">
                      <img src={PythonIcon} alt="python" />
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
                        src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                        alt="postman"
                      />
                      <img src={GoogleCloud} alt="google cloud" />
                      <img
                        src="https://workable-application-form.s3.amazonaws.com/advanced/production/61557f91d9510741dc62e7f8/c3635b59-a3d2-444a-b636-a9d0061dcdde"
                        alt="hugging face"
                      />
                      <img src={OpenAIIcon} alt="openai" />
                    </div>
                  </div>
                </div>
              </a>
            </div>

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
                      🏡Crafted a real estate price prediction model for
                      Bangalore houses using linear regression, integrated into
                      a user-friendly web page for real-time predictions based
                      on area, rooms, bathrooms, and location.
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
