import React from "react";

const Footer = () => {
  return (
    <footer>
      <p>© 2024 [Ваше Имя]. Все права защищены.</p>
      <div className="social-links">
        <a
          href="https://github.com/ваш-профиль"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/ваш-профиль"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
