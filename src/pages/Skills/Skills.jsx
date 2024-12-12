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
          <div key={skill.id} className="skills__tile">
            <img src={skill.logo} alt={skill.name} style={skill.style} />
          </div>
        ))}
      </div>
      {/* Experience */}
      <button className="skills__cv-button">DOWNLOAD MY CV</button>
    </section>
  );
};

export default Skills;
