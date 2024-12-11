import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/projects">Проекты</Link>
          </li>
          <li>
            <Link to="/skills">Навыки</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
