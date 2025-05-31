import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import dataSciIcon from "../assets/dataSci.webp";
import webDevIcon from "../assets/webdev.webp";
import dsaIcon from "../assets/dsa.png";
import pythonIcon from "../assets/icons8-python.svg";
import numpyIcon from "../assets/icons8-numpy.svg";
import pandasIcon from "../assets/icons8-pandas.svg";
import nlpIcon from "../assets/natural-language-processing.png";
import streamlitIcon from "../assets/streamlit.svg";
import flaskIcon from "../assets/icons8-flask.svg";
import gcpIcon from "../assets/google-cloud.svg";
import "../styles/Home.css";

const fadeInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const fadeInIcons = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeInItem = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.9 },
  }),
};

const Section = ({ icon, title, icons, descriptions }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="section" ref={ref}>
      <motion.div
        className="imageBox"
        variants={fadeInLeft}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.6 }}
      >
        <img src={icon} alt={title} />
      </motion.div>

      <motion.div
        className="sectionDetails"
        variants={fadeInRight}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>

        <motion.div
          className="iconGrid"
          variants={fadeInIcons}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
        >
          {icons.map((src, i) => (
            <img key={i} src={src} alt={`icon-${i}`} />
          ))}
        </motion.div>

        <div className="description">
          {descriptions.map((desc, i) => (
            <motion.p
              key={i}
              variants={fadeInItem}
              custom={i}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {desc}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const WhatIDo = () => {
  return (
    <div className="whatIDoContainer">
      <div className="sectionHeading">
        <h1>What I Do?</h1>
      </div>

      <Section
        icon={dataSciIcon}
        title="Data Science & AI"
        icons={[
          pythonIcon,
          numpyIcon,
          pandasIcon,
          "https://matplotlib.org/_static/logo_dark.svg",
          "https://user-images.githubusercontent.com/315810/92161415-9e357100-edfe-11ea-917d-f9e33fd60741.png",
          "https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png",
          "https://editor.analyticsvidhya.com/uploads/22024tf.png",
          "https://jeancochrane.com/static/images/blog/pytorch-functional-api/pytorch-logo.png",
          "https://github.com/opencv/opencv/wiki/logo/OpenCV_logo_no_text.png",
          nlpIcon,
          "https://miro.medium.com/v2/resize:fit:622/1*MVJZLfszGGNiJ-UFK4U31A.png",
          "https://miro.medium.com/v2/resize:fit:592/1*YM2HXc7f4v02pZBEO8h-qw.png",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/SpaCy_logo.svg/1200px-SpaCy_logo.svg.png",
          "https://raw.githubusercontent.com/RMNCLDYO/groq-ai-toolkit/main/.github/groq-logo.png",
          "https://media.datacamp.com/legacy/v1724169856/image_ff55d03003.png",
        ]}
        descriptions={[
          "📊 Data Science: Proficient in EDA, data preprocessing, and visualization using Pandas, Numpy, Matplotlib, Seaborn.",
          "🤖 Machine Learning: Built ML/DL models using TensorFlow, Keras, Scikit-learn for predictions and classification.",
          "🗣️ NLP & LLMs: Developed NLP systems using LangChain, SpaCy, NLTK; fine-tuned LLMs for AI apps.",
          "🧠 AI Agents: Created AI agents with Phidata & Groq for automation and intelligent decision-making.",
          "📉 Visualization: Dashboards with Matplotlib, Seaborn, Excel, and PowerBI for actionable insights.",
        ]}
      />

      <Section
        icon={webDevIcon}
        title="Full Stack Development"
        icons={[
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
          flaskIcon,
          "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png",
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
          "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
          streamlitIcon,
          "https://arunpotti.files.wordpress.com/2021/12/microsoft_azure.svg_.png",
          gcpIcon,
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png",
        ]}
        descriptions={[
          "💻 Built full-stack apps using HTML, CSS, JS, React, Express, Node, Flask, FastAPI, and Streamlit.",
          "🔒 Added secure login systems, roles, and permissions.",
          "📱 Designed responsive apps optimized for all devices.",
          "☁️ Cloud: Experience with AWS, Azure, GCP.",
          "📊 Databases: MySQL, MongoDB.",
        ]}
      />

      <Section
        icon={dsaIcon}
        title="Languages"
        icons={[
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
          "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
          "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
          pythonIcon,
        ]}
        descriptions={["⚡ Data Structures & Algorithms using Java"]}
      />
    </div>
  );
};

export default WhatIDo;
