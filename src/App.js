import React from 'react';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';

import Header from './components/Header';
import Inicio from './components/Inicio';
import SobreMi from './components/SobreMi';
import Skills from './components/Skills';
import Curriculum from './components/Curriculum';
import Portfolio from './components/Portafolio';
import Contacto from './components/Contacto';
import './styles/Responsive.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/sobremi" element={<SobreMi />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/portafolio" element={<Portfolio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/" element={<Inicio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
