// src/components/SobreMi.jsx
import React from "react";
import "../styles/SobreMi.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGamepad,
  faHeadphones,
  faPlane,
  faPersonHiking,
  faBook,
  faCar,
  faCamera,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";

const SobreMi = () => {
  const personalInfo = [
    { label: "Teléfono", value: "+569 68316581" },
    { label: "Email", value: "alvarosolano569@Gmail.com" },
    { label: "Website", value: "alvaro-dev.com" },
    { label: "Dirección", value: "La Florida, Santiago" },
    { label: "Cargo", value: "Desarrollador FrontEnd" },
  ];

  return (
    <section id="sobre-mi" className="sobremi">
      <div className="contenido-seccion">
        <h2>Sobre Mí</h2>
        <p>
          <span>¡Hola, soy Alvaro Solano!.</span>  Me gusta el
          desarrollo front-end, trabajando con tecnologías como React, Angular,
          JavaScript, HTML y CSS. Ahora, estoy aprendiendo más del lado del
          backend. Mi meta es ser un dev full-stack. Si tienes alguna idea o
          proyecto, estaría feliz de escucharlo. ¡Contáctame!.
        </p>

        <div className="fila">
          {/* datos personales */}
          <div className="col">
            <h3>Datos Personales</h3>
            <ul>
              {personalInfo.map((item) => (
                <li>
                  <strong>{item.label}</strong>
                  {item.value}
                </li>
              ))}
            </ul>
          </div>

          {/* intereses */}
          <div className="col">
            <h3>Intereses</h3>
            <div className="contenedor-intereses">
              <div className="interes">
                <FontAwesomeIcon icon={faGamepad} />
                <span>JUEGOS</span>
              </div>
              <div className="interes">
                <FontAwesomeIcon icon={faHeadphones} />
                <span>MUSICA</span>
              </div>
              <div className="interes">
                <FontAwesomeIcon icon={faPlane} />
                <span>VIAJAR</span>
              </div>
              <div className="interes">
                <FontAwesomeIcon icon={faAndroid} />
                <span>ANDROID</span>
              </div>
              <div className="interes">
                <FontAwesomeIcon icon={faPersonHiking} />
                <span>DEPORTE</span>
              </div>
              <div className="interes">
                <FontAwesomeIcon icon={faBook} />
                <span>LIBROS</span>
              </div>
              <div className="interes">
                <FontAwesomeIcon icon={faCar} />
                <span>AUTOS</span>
              </div>
              <div className="interes">
                <FontAwesomeIcon icon={faCamera} />
                <span>FOTOS</span>
              </div>
            </div>
          </div>
        </div>
        <a href="curriculum/alvaro-solano.pdf" download>
          <button>
            Descargar CV <FontAwesomeIcon icon={faDownload} />
            <span className="overlay"></span>
          </button>
        </a>
      </div>
    </section>
  );
};

export default SobreMi;
