import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./Home.css";

const Home = () => {
  return (
    <main className="home">
      <div className="home__cover">
        <Header />
        <div className="home__main">
          <h1 className="home__title">
            Hello! <br /> I'm{" "}
            <span className="home__gradient">Yury Bursian</span>
            , <br /> a Full-Stack web developer
          </h1>
          <div className="home__buttons">
            <Link to="/projects" className="home__button">
              My Projects
            </Link>
            <Link to="/skills" className="home__button">
              My skills
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
