import React from "react";
import Header from "../../components/Header/Header";
import avatar from "../../assets/me.jpg";
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
            , <br /> a Full-Stack web developer.
          </h1>
          <div className="home__buttons">
            <button className="home__button">My Projects</button>
            <button className="home__button">My skills</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
