import React from "react";
import "./Projects.css";
import Header from "../../components/Header/Header";
import { projects } from "../../utils/constants";

const Projects = () => {
  return (
    <section className="projects">
      <Header />
      <h1 className="projects__title">My Projects</h1>
      <div className="projects__list">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`project-card ${
              index % 2 === 0 ? "project-card--left" : "project-card--right"
            }`}
          >
            <div className="project-card__content">
              <h2 className="project-card__title">
                <a
                  href={project.link}
                  className="project-card__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </a>
              </h2>
              <p className="project-card__description">{project.description}</p>
            </div>
            <div className="project-card__image">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.title} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
