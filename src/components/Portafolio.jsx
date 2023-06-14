import React from 'react';
import '../styles/Portafolio.css';
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import p4 from '../assets/p4.jpg';
import p5 from '../assets/p5.jpg';
import p6 from '../assets/p6.jpg';

function Portafolio() {
    const proyectos = [
        { img: p1, title: 'Proyecto Barberia', description: 'Fotografía', alt: 'Imagen del proyecto de diseño creativo 1' },
        { img: p2, title: 'Diseño Creativo', description: 'Fotografía', alt: 'Imagen del proyecto de diseño creativo 2' },
        { img: p3, title: 'Diseño Creativo', description: 'Fotografía', alt: 'Imagen del proyecto de diseño creativo 3' },
        { img: p4, title: 'Diseño Creativo', description: 'Fotografía', alt: 'Imagen del proyecto de diseño creativo 4' },
        { img: p5, title: 'Diseño Creativo', description: 'Fotografía', alt: 'Imagen del proyecto de diseño creativo 5' },
        { img: p6, title: 'Diseño Creativo', description: 'Fotografía', alt: 'Imagen del proyecto de diseño creativo 6' },
    ];

    return (
        <section id="portafolio" className="portafolio">
            <div className="contenido-seccion">
                <h2>PORTAFOLIO</h2>
                <div className="galeria">
                    {proyectos.map((proyecto, index) => (
                        <div key={index} className="proyecto">
                            <img src={proyecto.img} alt={proyecto.alt} />
                            <div className="overlay">
                                <h3>{proyecto.title}</h3>
                                <p>{proyecto.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Portafolio;
