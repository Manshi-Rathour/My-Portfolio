import React, { useEffect, useState } from 'react';
import '../styles/Contact.css';
import contact from "../assets/contactMe.webp";
import linkedinIcon from "../assets/linkedin.webp";
import instagramIcon from "../assets/insta.webp";
import githubIcon from "../assets/github.svg";
import emailIcon from "../assets/email.webp";


const ContactHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
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
    <>
      <div id="contact-bg" className={isVisible ? 'visible' : ''}>
        <div className="contact education-img">
          <img src={contact} alt="Education Image" />
        </div>
        <div className="contact contact-content">
          <h1>Contact Me</h1>

          <div id="contact-icons">
            <a href="https://www.linkedin.com/in/manshi-rathour/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <img src={linkedinIcon} alt="LinkedIn Icon" />
            </a>
            <a href="https://github.com/Manshi-Rathour" target="_blank" rel="noopener noreferrer" title="GitHub">
              <img src={githubIcon} alt="GitHub Icon" />
            </a>
            <a href="mailto:manshi2086@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
              <img src={emailIcon} alt="Email Icon" />
            </a>
          </div>

          <div id="resume">
            <a
              href="https://drive.google.com/file/d/1GpU2vrn0sA0ySl2zX9K9t2NW2pgwxUdY/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button"
            >
              My Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactHeader;
