import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';

const Header = () => {
  // eslint-disable-next-line
  const [selected, setSelected] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const seleccionar = (selection) => {
    console.log("seleccionar fue llamado con: ", selection);
    setSelected(selection);
  };

  const mostrarOcultarMenu = () => {
    console.log("mostrarOcultarMenu fue llamado");
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="contenedor-header">
        <header>
            <div className="logo">
                <Link to="/">Portafolio</Link>
            </div>
            <nav id="nav" className={isMenuOpen ? "responsive" : ""}>
                <ul>
                    <li><Link to="/" onClick={() => seleccionar("INICIO")}>INICIO</Link></li>
                    <li><Link to="/sobremi" onClick={() => seleccionar("SOBRE MI")}>SOBRE MI</Link></li>
                    <li><Link to="/skills" onClick={() => seleccionar("SKILLS")}>SKILLS</Link></li>
                    <li><Link to="/curriculum" onClick={() => seleccionar("CURRICULUM")}>CURRICULUM</Link></li>
                    <li><Link to="/portafolio" onClick={() => seleccionar("PORTAFOLIO")}>PORTAFOLIO</Link></li>
                    <li><Link to="/contacto" onClick={() => seleccionar("CONTACTO")}>CONTACTO</Link></li>
                </ul>
            </nav>
            <div className="nav-responsive" onClick={mostrarOcultarMenu}>
                {isMenuOpen ? <ImCross /> : <GiHamburgerMenu />}
            </div>
        </header>
    </div>
  );
};

export default Header;
