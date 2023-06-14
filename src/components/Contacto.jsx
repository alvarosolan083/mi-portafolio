import React, { useState } from 'react';
import '../styles/Contacto.css';
import ubicacion from '../assets/ubicacion.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faLocationDot, faMobileAlt, faEnvelope, faAngleUp, faRss } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faSkype, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

function Contacto() {
    const [error, setError] = useState('');

    function sendEmail(e) {
        e.preventDefault();

        // Validación de campos
        const form = e.target;
        if (form.checkValidity()) {
            emailjs.sendForm('service_d64savi', 'template_p6g428j', form, 'UewTNkYxWgnj2-zQu')
                .then((result) => {
                    console.log(result.text);
                    Swal.fire(
                        '¡Enviado!',
                        'Tu mensaje ha sido enviado.',
                        'success'
                    );
                    form.reset();
                    setError('');
                }, (error) => {
                    console.log(error.text);
                    Swal.fire(
                        '¡Error!',
                        'Algo salió mal, por favor intente nuevamente.',
                        'error'
                    );
                    setError('');
                });
        } else {
            // Mostrar mensaje de error al usuario
            setError('Por favor, complete todos los campos requeridos.');
        }
    }

    return (
        <>
            <section id="contacto" className="contacto">
                <div className="contenido-seccion">

                    <h2>CONTACTO</h2>
                    <form onSubmit={sendEmail} className="fila">
                        <div className="col">
                            <input type="text" placeholder="Tú Nombre" name="from_name" required onChange={() => setError('')} />
                            <input type="text" placeholder="Tú Número telefónico" name="phone" required onChange={() => setError('')} />
                            <input type="email" placeholder="Tú Dirección de correo" name="reply_to" required onChange={() => setError('')} />
                            <input type="text" placeholder="Tema" name="subject" required onChange={() => setError('')} />
                            <textarea name="message" cols="30" rows="10" placeholder="Mensaje..." required onChange={() => setError('')}></textarea>
                            <button type="submit">
                                Enviar Mensaje<FontAwesomeIcon icon={faPaperPlane} />
                                <span className="overlay"></span>
                            </button>
                            {error && <p className="error-message">{error}</p>}
                        </div>
                        <div className="col">
                            <img src={ubicacion} alt="ubicación" />
                            <div className="info">
                                <ul>
                                    <li>
                                        <FontAwesomeIcon icon={faLocationDot} />
                                        <br />
                                        Santiago , La Florida
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faMobileAlt} />
                                        <br />
                                        Telefono: +56968316581
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faEnvelope} />
                                        <br />
                                        Email: alvarosolano569@Gmail.com
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <footer>
                <button className="arriba" onClick={() => window.scrollTo(0, 0)}>
                    <FontAwesomeIcon icon={faAngleUp} />
                </button>
                <div className="redes">
                    {/* Aquí puedes añadir tus propios enlaces a tus páginas de redes sociales */}
                    <button onClick={() => { /* código de redirección */ }}><FontAwesomeIcon icon={faFacebookF} /></button>
                    <button onClick={() => { /* código de redirección */ }}><FontAwesomeIcon icon={faTwitter} /></button>
                    <button onClick={() => { /* código de redirección */ }}><FontAwesomeIcon icon={faSkype} /></button>
                    <button onClick={() => { /* código de redirección */ }}><FontAwesomeIcon icon={faLinkedinIn} /></button>
                    <button onClick={() => { /* código de redirección */ }}><FontAwesomeIcon icon={faRss} /></button>
                </div>
            </footer>
        </>
    );
}

export default Contacto;
