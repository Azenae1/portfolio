import About_me from "../assets/about-me.png";
import aroundtheus from "../assets/aroundtheus.png";
import coffeeshop from "../assets/cofeeshop.png";
import wtwr from "../assets/wtwr.png";
import library from "../assets/library.png";
import News_explorer from "../assets/news.png";

import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import ts from "../assets/ts.png";
import react from "../assets/react.png";

export const projects = [
  {
    id: 1,
    title: "News Explorer",
    description:
      "This application is designed to allow users search for the latest news on any topic and save them in their personal account. The site is powered by News API and features responsive design.",
    image: News_explorer,
    link: "https://news-explorer.crabdance.com/",
  },
  {
    id: 2,
    title: "WhatToWear",
    description:
      "The project is made to recommend users suitable clothing according to the weather forecast in their location. Powered by Openweather API.",
    image: wtwr,
    link: "https://whattowear.crabdance.com/",
  },
  {
    id: 3,
    title: "Around the US",
    description:
      "A photosharing frontend application allows users to upload, like and delete photos as well as edit the profile. Features responsive web-design.",
    image: aroundtheus,
    link: "https://azenae1.github.io/se_project_aroundtheus/",
  },
  {
    id: 4,
    title: "TriplePeaks Coffee shop",
    description:
      "A landing page for a coffeeshop designed using HTML5 and CSS3 featuring flexbox, BEM file structure, video integration and a custom booking form.",
    image: coffeeshop,
    link: "https://azenae1.github.io/se_project_coffeeshop/",
  },
  {
    id: 5,
    title: "TriplePeaks library",
    description:
      "A landing page for a town library showcasing upcoming events, book recommendations, member program and more. Designed using HTML5 and CSS3 featuring flexbox and BEM file structure.",
    image: library,
    link: "https://azenae1.github.io/se_project_library/",
  },
  {
    id: 6,
    title: "About me",
    description:
      "My first web application. A simple page, highlighting some of my hobbies and interests.",
    image: About_me,
    link: "https://azenae1.github.io/se_project_about-me/",
  },
];

export const skillsList = [
  { id: 1, name: "HTML5", logo: html },
  { id: 2, name: "CSS3", logo: css },
  { id: 3, name: "JavaScript", logo: js },
  { id: 4, name: "React", logo: react },
  { id: 5, name: "Typecsript", logo: ts },
  { id: 6, name: "Node.js", logo: "path/to/nodejs-logo.png" },
  { id: 7, name: "Tailwind CSS", logo: "path/to/tailwind-logo.png" },
  { id: 8, name: "MongoDB", logo: "path/to/mongodb-logo.png" },
];
