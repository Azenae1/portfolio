import React from "react";
import "./Projects.css";
import Header from "../../components/Header/Header";
import Image from "../../assets/logo.png";

const projects = [
  {
    id: 1,
    title: "Project One",
    description:
      "This is the first project description. It showcases a unique feature.",
    image: Image,
  },
  {
    id: 2,
    title: "Project Two",
    description:
      "The second project has an innovative design and rich functionality.",
    image: Image,
  },
  {
    id: 3,
    title: "Project Three",
    description: "Project three is focused on performance and scalability.",
    image: Image,
  },
];

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
              <h2 className="project-card__title">{project.title}</h2>
              <p className="project-card__description">{project.description}</p>
            </div>
            <div className="project-card__image">
              <img src={project.image} alt={project.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
