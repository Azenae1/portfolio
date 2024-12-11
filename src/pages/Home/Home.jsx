import React from "react";
import Header from "../../components/Header/Header";
import "./Home.css";

const Home = () => {
  return (
    <main className="home">
      <div className="home__cover">
        <Header />
        <h1 className="home__title">
          Hello! I'm <span className="home__gradient">Yury Bursian</span>
          , <br /> a Full-Stack web developer.
        </h1>
        <p>
          Я фронтенд-разработчик с опытом создания современных веб-приложений.
          Ознакомьтесь с моими <a href="/projects">проектами</a> и{" "}
          <a href="/skills">навыками</a>.
        </p>
        <img src="/images/my-photo.jpg" alt="Мое фото" className="my-photo" />
      </div>
    </main>
  );
};

export default Home;
