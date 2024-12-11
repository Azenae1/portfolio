import Image from "../assets/logo.png";
import About_me from "../assets/about-me.png";
import News_explorer from "../assets/news.png";

export const projects = [
  {
    id: 1,
    title: "About me",
    description:
      "My first web application. A simple page, highlighting some of my hobbies and interests.",
    image: About_me,
    link: "https://azenae1.github.io/se_project_about-me/",
  },
  {
    id: 2,
    title: "News Explorer",
    description:
      "This application is designed to allow users search for the latest news on any topic and save them in their personal account. The site is powered by News API and features responsive design.",
    image: News_explorer,
    link: "https://news-explorer.crabdance.com/",
  },
  {
    id: 3,
    title: "Project Three",
    description: "Project three is focused on performance and scalability.",
    image: Image,
  },
];
