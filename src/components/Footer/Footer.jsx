import React from "react";

import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="copyright">
        © 2024-2025 By Yury Bursian. All rights reserved.
      </p>
      <div className="social-links">
        <a
          href="https://github.com/Azenae1"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          <img className="footer__img" src={github} alt="Github" />
        </a>
        <a
          href="https://www.linkedin.com/in/yury-bursian/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          <img className="footer__img" src={linkedin} alt="LinkedIn" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
