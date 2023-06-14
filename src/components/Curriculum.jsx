import React from 'react';
import '../styles/Curriculum.css'; // Agrega tu archivo CSS correspondiente aquí


const Curriculum = () => {
  return (
    <section id="curriculum" className="curriculum">
        <div className="contenido-seccion">
            <h2>Curriculum</h2>
            <div className="fila">
                <div className="col izquierda">
                    <h3>Educación</h3>
                    <div className="item izq">
                        <h4>  Cursando Ingeniero en Informática</h4>
                        <span className="casa">Duoc UC</span>
                        <span className="fecha">2019 - 2023</span>
                        <p>Como estudiante de Ingeniería en Informática en Duoc UC, he fortalecido mis habilidades técnicas y analíticas, 
                            aprendiendo sobre la gestión de sistemas de información, diseño de bases de datos, 
                            desarrollo de software y seguridad informática. 
                            Me he destacado por mi habilidad para aplicar los conceptos teóricos aprendidos en 
                            situaciones de proyectos del mundo real, lo que ha enriquecido mi capacidad para desarrollar 
                            soluciones informáticas eficientes y efectivas.</p>
                        <div className="conectori">
                            <div className="circuloi"></div>
                        </div>
                    </div>
                    <div className="item izq">
                        <h4>Analista programador</h4>
                        <span className="casa">Duoc UC</span>
                        <span className="fecha">2019 - 2022</span>
                        <p> Durante mis estudios en Duoc UC, adquirí una sólida base en programación y análisis de sistemas. 
                            Aprendí diversos lenguajes de programación, 
                            técnicas de resolución de problemas y estrategias de optimización de código. 
                            Además de la creación de soluciones técnicas efectivas y el trabajo en equipos multidisciplinarios.</p>
                        <div className="conectori">
                            <div className="circuloi"></div>
                        </div>
                    </div>
                </div>

                <div className="col derecha">
                    <h3>Experiencia de trabajo</h3>
                    <div className="item der">
                        <h4>Front Developer </h4>
                        <span className="casa">VASS LATAM</span>
                        <span className="fecha">2022 - 2023</span>
                        <p>Tras finalizar una serie de cursos especializados en desarrollo front-end, 
                            pude poner en práctica lo aprendido al colaborar en la creación de una pasarela de pagos. 
                            Este proyecto no solo me proporcionó una valiosa experiencia en la construcción de 
                            sistemas para e-commerce, sino que también afianzó mi destreza técnica y mi capacidad para 
                            resolver problemas de manera eficiente. </p>
                        <div className="conectord">
                            <div className="circulod"></div>
                        </div>
                    </div>
                    <div className="item der">
                        <h4>Practica Analista Programador</h4>
                        <span className="casa">VASS LATAM</span>
                        <span className="fecha">2022 - 2023</span>
                        <p>Después de completar múltiples cursos en desarrollo front-end en mi practica, tuve la oportunidad de 
                           aplicar mis habilidades trabajando en la planificación de una pasarela de pagos. Este 
                           proyecto me permitió adquirir experiencia práctica en el diseño e implementación de 
                            y mejorar mis habilidades técnicas y de resolución de problemas.</p>
                        <div className="conectord">
                            <div className="circulod"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Curriculum;
