// src/components/Inicio.jsx
import React from 'react';
import '../styles/Inicio.css';
import alvaro from '../assets/alvaro.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faSkype, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faRss } from '@fortawesome/free-solid-svg-icons';

const Inicio = () => {
  return (
    <section id="inicio" className="inicio">
        <div className="contenido-banner">
            <div>
               <img src={alvaro} alt="Alvaro" />
            </div>
            <h1>Alvaro Solano</h1>
            <h2>Analista Programador - Desarrollador FrontEnd</h2>
            <div className="redes">
              <a href="https://www.linkedin.com/feed/"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="https://www.linkedin.com/feed/"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="https://www.linkedin.com/feed/"><FontAwesomeIcon icon={faSkype} /></a>
              <a href="https://www.linkedin.com/feed/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
              <a href="https://www.linkedin.com/feed/"><FontAwesomeIcon icon={faRss} /></a>
            </div>
        </div>
    </section>
  );
};

export default Inicio;
