import React from "react";
import { Link } from "react-router-dom";

import "./About.css";
import me from "../../assets/me.jpg";
import Header from "../../components/Header/Header";

const About = () => {
  return (
    <section className="about">
      <Header />
      <h2 className="about__title">About Me</h2>
      <div className="about__content">
        <div className="about__photo-container">
          <img src={me} alt="My Photo" className="about__photo" />
        </div>
        <div className="about__bio">
          <p>
            I was born in Moscow, Russia, where I studied electronics and civil
            engineering. During{" "}
            <span className="about__bio-yellow"> 2016-2018</span>, I worked as a
            <span className="about__bio-yellow"> Research Assistant</span> at
            the Microelectronics Lab of the National Research Nuclear University
            MEPhI, where I gained valuable experience in scientific research.
            This role allowed me to contribute to various experiments and
            collaborate on research articles, including publications in the
            Scopus database.
          </p>
          <p>
            From<span className="about__bio-yellow"> 2019 to 2022</span> I
            shifted my focus to civil engineering and joined NPO Region, a small
            innovative company developing both
            <span className="about__bio-yellow">
              {" "}
              hardware and software solutions
            </span>{" "}
            for road diagnostics. I performed many tasks while working there and
            really enjoyed this experience. Although my main responsibilities
            included<span className="about__bio-yellow">
              {" "}
              testing software
            </span>{" "}
            for measurement equipment, ensuring its accuracy, I occasionally
            helped installing equipment on mobile labs and
            <span className="about__bio-yellow">
              {" "}
              authored clear instructions
            </span>{" "}
            for our clients on how to use it.
          </p>
          <p>
            In<span className="about__bio-yellow"> 2022</span> I relocated to
            Israel and made a career transition to software engineering. After a
            few years working with developers, I felt really excited about it
            and decided to become a developer myself. I finished an online
            bootcamp from TripleTen Israel which allowed me to learn
            <span className="about__bio-yellow">
              {" "}
              HTML, CSS, JavaScript, React.js
            </span>{" "}
            and other modern technologies. However, I believe that to be a good
            developer, you should never stop learning, that’s why after
            finishing the course and passing my final project with 94/100
            points, I continued to study other technologies myself. Those
            include things like
            <span className="about__bio-yellow">
              {" "}
              React Redux, TypeScript, Docker
            </span>{" "}
            and others featured on the{" "}
            <Link to="/skills" className="about__bio-button">
              Skills
            </Link>{" "}
            page.
          </p>
          <p>
            I’m now<span className="about__bio-yellow"> actively seeking</span>{" "}
            opportunities to further my career as a developer. I am eager to
            apply my skills in innovative projects and am open to relocation for
            the right opportunity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
