import React from "react";
import "./Skills.css";
import { skillsList } from "../../utils/constants";
import Header from "../../components/Header/Header";

const Skills = () => {
  return (
    <section className="skills">
      <Header />
      <h2 className="skills__title">MY SKILLS</h2>
      <div className="skills__grid">
        {skillsList.map((skill) => (
          <div key={skill.id} className="skills__tile">
            <img src={skill.logo} alt={skill.name} style={skill.style} />
          </div>
        ))}
        {/* Experience */}
        <div className="skills__tile skills__tile--experience">
          <p className="experience__years">4</p>
          <p>Years Experience Working</p>
          <button className="skills__cv-button">DOWNLOAD MY CV</button>
        </div>
      </div>
    </section>
  );
};

export default Skills;
