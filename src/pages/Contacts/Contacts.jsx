import React from "react";

import "./Contacts.css";
import Header from "../../components/Header/Header";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import whatsapp from "../../assets/whatsapp.png";
import telegram from "../../assets/tg.png";
import cv from "../../assets/cv.png";
import airplane from "../../assets/airplane.png";
import email from "../../assets/email.png";

const Contacts = () => {
  return (
    <section className="contacts">
      <Header />
      <h2 className="contacts__title">Contact Me</h2>
      <div className="contacts__info">
        <div className="contacts__item">
          <a
            href="https://www.linkedin.com/in/yury-bursian/"
            target="_blank"
            rel="noopener noreferrer"
            className="contacts__link"
          >
            <img src={linkedin} alt="LinkedIn" className="contacts__icon" />
            LinkedIn
          </a>
        </div>
        <div className="contacts__item">
          <a
            href="https://api.whatsapp.com/send/?phone=%2B972515955816&text=You+are+welcome+send+me+message&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="contacts__link"
          >
            <img src={whatsapp} alt="WhatsApp" className="contacts__icon" />
            WhatsApp
          </a>
        </div>
        <div className="contacts__item">
          <a
            href="https://github.com/Azenae1"
            target="_blank"
            rel="noopener noreferrer"
            className="contacts__link"
          >
            <img src={github} alt="GitHub" className="contacts__icon" />
            GitHub
          </a>
        </div>
        <div className="contacts__item">
          <a
            href="https://t.me/Azenael"
            target="_blank"
            rel="noopener noreferrer"
            className="contacts__link"
          >
            <img src={telegram} alt="Telegram" className="contacts__icon" />
            Telegram
          </a>
        </div>

        <div className="contacts__item">
          <a
            href="mailto:yurybursian@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contacts__link"
          >
            <img src={email} alt="Email" className="contacts__icon" />
            Email
          </a>
        </div>

        <div className="contacts__item">
          <a
            href="https://docs.google.com/document/d/1scupnPHkeW4TWCgouYl23JzUqqY3NPEK/edit?usp=sharing&ouid=115147468320759622793&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            className="contacts__link"
          >
            <img src={cv} alt="Download CV" className="contacts__icon" />
            Download CV
          </a>
        </div>
      </div>
      <div className="contacts__relocation">
        <img
          src={airplane}
          alt="airplane"
          className="contacts__relocation-img"
        />
        <p className="contacts__relocation-text">
          I am ready for relocation! Let’s work together!
        </p>
      </div>
    </section>
  );
};

export default Contacts;
