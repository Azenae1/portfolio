import React from "react";
import "./Skills.css";
import { skillsList } from "../../utils/constants";
import Header from "../../components/Header/Header";

const Skills = () => {
  return (
    <section className="skills">
      <Header />
      <h2 className="skills__title">My skills</h2>
      <div className="skills__grid">
        {skillsList.map((skill) => (
          <div key={skill.id} className="skills__wrapper">
            <div className="skills__tile">
              <img src={skill.logo} alt={skill.name} style={skill.style} />
            </div>
            <p className="skills__name">{skill.name}</p>
          </div>
        ))}
      </div>
      {/* CV */}

      <button className="skills__cv-button">
        <a
          href="https://docs.google.com/document/d/1scupnPHkeW4TWCgouYl23JzUqqY3NPEK/edit?usp=sharing&ouid=115147468320759622793&rtpof=true&sd=true"
          target="_blank"
          rel="noopener noreferrer"
          className="skills__cv-link"
        >
          DOWNLOAD MY CV
        </a>
      </button>
    </section>
  );
};

export default Skills;
