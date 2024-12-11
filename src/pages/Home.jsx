import React from "react";

const Home = () => {
  return (
    <section className="home">
      <h1>Привет! Меня зовут [Ваше Имя]</h1>
      <p>
        Я фронтенд-разработчик с опытом создания современных веб-приложений.
        Ознакомьтесь с моими <a href="/projects">проектами</a> и{" "}
        <a href="/skills">навыками</a>.
      </p>
      <img src="/images/my-photo.jpg" alt="Мое фото" className="my-photo" />
    </section>
  );
};

export default Home;
