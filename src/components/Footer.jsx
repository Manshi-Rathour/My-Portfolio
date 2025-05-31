import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bottom">
        <p>
          © Copyright {new Date().getFullYear()} | Manshi Rathour | All rights
          reserved.
        </p>
        <p>
          <a href="mailto:manish@mdevsolutions.in">manshi2086@gmail.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
