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
            <a href="https://www.linkedin.com/in/manshi-rathour-bb0b87272/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <img src={linkedinIcon} alt="LinkedIn Icon" />
            </a>
            <a href="https://github.com/Manshi-Rathour" target="_blank" rel="noopener noreferrer" title="GitHub">
              <img src={githubIcon} alt="GitHub Icon" />
            </a>
            <a href="https://www.instagram.com/_rathour_manshi?igsh=NzFvbXlzMjduZGY4" target="_blank" rel="noopener noreferrer" title="Instagram">
              <img src={instagramIcon} alt="Instagram Icon" />
            </a>
            <a href="mailto:manshi2086@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
              <img src={emailIcon} alt="Email Icon" />
            </a>
          </div>

          <div id="resume">
            <a
              href="https://docs.google.com/document/d/10-1bY9eYsq21-Al1a4Uun1TJftD7_kAo/edit?usp=sharing&ouid=112546153726466097881&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button"
            >
              See My Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactHeader;
