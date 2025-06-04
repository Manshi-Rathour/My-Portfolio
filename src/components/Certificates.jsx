import React from "react";
import "../styles/Education.css";

import iitKGP from "../assets/iitKGP.jpg";
import gcp from "../assets/gcp.webp";
import nitp from "../assets/nitp.png";
import google from "../assets/google.webp";
import postman from "../assets/postman.webp";
import internshala from "../assets/internshala.jpg";

const Certifications = () => {
  const certificateData = [
    {
      title: "AI with Machine Learning",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Indian_Institute_of_Technology%2C_Patna.svg/640px-Indian_Institute_of_Technology%2C_Patna.svg.png",
      link: "https://media.licdn.com/dms/image/v2/D562DAQE8e0Wy0m_bMg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1729435119964?e=1737802800&v=beta&t=NQoN_kocZlV-YO_3u2Q9hPxeQFQ7TKyuVimQ-uAFbQ8",
    },
    {
      title: "Problem Solving using Java",
      img: "https://repository-images.githubusercontent.com/231893793/cec60480-04a9-11eb-80c4-df7359d94047",
      link: "https://www.hackerrank.com/certificates/0effc0861de0",
    },
    {
      title: "SQL",
      img: "https://avatars.githubusercontent.com/u/16063416?s=280&v=4",
      link: "https://codebasics.io/certificate/CB-50-158630",
    },
    {
      title: "Introduction to Machine Learning",
      img: iitKGP,
      link: "https://media.licdn.com/dms/image/D4D2DAQFJvGtkAd5bXQ/profile-treasury-document-cover-images_480/0/1696871705946?e=1719295200&v=beta&t=JEIG7O6hO5i578VfLHUnNYCp6YrYmA5ry2Qw8MirscE",
    },
    {
      title: "Introduction to Large Language Models",
      img: gcp,
      link: "https://www.cloudskillsboost.google/public_profiles/9e93b857-0177-42eb-bb35-2188dfd7b79e/badges/7890053",
    },
    {
      title: "Postman API",
      img: nitp,
      link: "https://certificate.givemycertificate.com/c/4278cfe3-1c04-484d-8453-757712e7ef99",
    },
    {
      title: "Generative AI",
      img: google,
      link: "https://www.cloudskillsboost.google/public_profiles/9e93b857-0177-42eb-bb35-2188dfd7b79e/badges/7746219",
    },
    {
      title: "Postman API Fundamentals Student Expert",
      img: postman,
      link: "https://badgr.com/public/assertions/7uPVp26fS8WsESqA64wLww",
    },
    {
      title: "Full Stack Web Development",
      img: internshala,
      link: "https://trainings.internshala.com/view_certificate/bqfmux155uh/fj0hqomrr9i/",
    },
  ];

  return (
    <>
      <div id="certifications">
        <div id="certificates">
          <h1>Certifications</h1>
        </div>
        <div className="certificates-container">
          {certificateData.map((cert, index) => (
            <div className="certificate" key={index}>
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                <img src={cert.img} alt={cert.title} />
                <div className="card-body">
                  <h3>{cert.title}</h3>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div id="moreproj">
        <a
          className="btn"
          href="https://www.cloudskillsboost.google/public_profiles/9e93b857-0177-42eb-bb35-2188dfd7b79e"
          target="_blank"
          rel="noopener noreferrer"
        >
          More Certificates
        </a>
      </div>
    </>
  );
};

export default Certifications;
